package com.auro.festival.festival.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {


	 @Value("${recaptcha.site.key}")
	    private String siteKey;
	
  
   
   @GetMapping("/")
   public String home() {
       return "index";
   }
	
}
