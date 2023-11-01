package com.tms.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                //allow the angular requests from frontend
                registry.addMapping("/login")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET","POST")
                        .allowCredentials(true);
                
                registry.addMapping("/student") // Add the endpoint for the student component here
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET", "POST")
                        .allowCredentials(true);
                
                registry.addMapping("/getCourse") // Add the endpoint for the student component here
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET")
                        .allowCredentials(true);
            }
        };
    }
}
