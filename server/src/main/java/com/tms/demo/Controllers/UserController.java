package com.tms.demo.Controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tms.demo.JwtUtil;
import com.tms.demo.Pojos.UserView;
import com.tms.demo.Services.UserService;

@RestController
public class UserController {
    
    private final UserService userService;
    private final JwtUtil jwtUtil;

    @Autowired
    public UserController(UserService userService, JwtUtil jwtUtil){
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> userService(@RequestBody UserView userView){
        Map<String, String> response = (Map<String, String>) userService.userCheck(userView);
        System.out.println(response);
        if("success".equals(response.get("status"))){
            System.out.println("reached here");
            String username = userView.getUsername();
            String role = userView.getRole();
            final String token = jwtUtil.generateToken(username, role);
            response.put("token", token);
            return ResponseEntity.ok(response);
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/login")
    public String hello(){
        return "hello";
    }
}
