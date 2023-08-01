package com.shop.model;

abstract class User {
    String username;
    String password;
    String email;

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    // Abstract method to be implemented by subclasses
    public abstract void displayMenu();

    // Getters for the fields (You may choose to omit setters if you don't want to allow modification of fields)
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}
