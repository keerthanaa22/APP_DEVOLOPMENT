package com.shop.model;

public class AdminServiceImpl extends AdminService {
    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "admin123";

    @Override
    public boolean isAdminUser(String username, String password) {
        return username.equals(ADMIN_USERNAME) && password.equals(ADMIN_PASSWORD);
    }
}