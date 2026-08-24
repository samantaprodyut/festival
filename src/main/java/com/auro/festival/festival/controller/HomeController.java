package com.auro.festival.festival.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {

	@GetMapping("/")
   public String home() {
       return "index";
   }
	
}
