FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app

COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .

RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src src

RUN ./mvnw clean package -DskipTests

# Show exactly what Maven created
RUN echo "===== TARGET DIRECTORY =====" && ls -lah /app/target && echo "===== JAR FILES =====" && find /app/target -maxdepth 1 -type f -name "*.jar" -ls

FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/*.jar /app/app.jar

# Verify the JAR exists in the final image
RUN echo "===== FINAL IMAGE =====" && ls -lah /app && echo "===== APP.JAR =====" && ls -lah /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]