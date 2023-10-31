package com.tms.demo;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import com.tms.demo.Pojos.UserView;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;



@Configuration
public class JwtUtil {
    
    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(String username, String role) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", role);
        return createToken(claims, String.valueOf(username));
    }

    private String createToken(Map<String, Object> claims, String subject) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + 1000 * 60 * 60 * 10);

        return Jwts.builder()
              .setClaims(claims)
              .setSubject(subject)
              .setIssuedAt(now)
              .setExpiration(expirationDate)
              .signWith(SignatureAlgorithm.HS256, secret)
              .compact();
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims:: getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    public boolean isTokenExpired(String token){
        final Date expiration = extractExpiration(token);
        return expiration.before(new Date());
    }

    public boolean validateToken(String token, UserView userView) {
        final String username = extractUsername(token);
        return (username.equals(userView.getUsername()) && !isTokenExpired(token));
    }
}
