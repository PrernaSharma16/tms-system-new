package com.tms.demo.Pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserView {
    
    @Id
    private int id;

    @Column(name = "username")
    private int username;

    @Column(name = "role")
    private String role;

    @Column(name = "password")
    private String password;

    public UserView(){

    }

    public UserView(int username, String dob, String role, String password) {
        this.username = username;
        this.role = role;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUsername() {
        return username;
    }

    public void setUsername(int username) {
        this.username = username;
    }


    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
      
    
}
