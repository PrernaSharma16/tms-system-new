package com.tms.demo.Services;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.tms.demo.Pojos.UserView;

@Service
public class UserService {
    
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserService(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public Map<String, String> userCheck(UserView userView){
        String sql = "SELECT * FROM roles WHERE username = ?";
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql, userView.getUsername());
        System.out.println("backend: "+result);
        if(!result.isEmpty()){

            String providedPassword = userView.getPassword();
            String providedPasswordHash = hashWithSHA256(providedPassword);
            String storedPasswordHash = (String) result.get(0).get("password");
            System.out.println("Password by user: "+providedPasswordHash);

            if (providedPasswordHash.equals(storedPasswordHash)){
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "login successful");
            return response;
            }
        }
        Map<String, String> response = new HashMap<>();
        response.put("status", "error");
        response.put("message", "login failed.Invalid username or password");
        return response;
    }

    private String hashWithSHA256(String input){
        try{
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = md.digest(input.getBytes(StandardCharsets.UTF_8));

            StringBuilder sb = new StringBuilder();
            for (byte b : hashBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();

        } catch (NoSuchAlgorithmException e){
            throw new RuntimeException("SHA-256 hashing algorithm not available.", e);
        }
    }
}
