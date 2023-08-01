package com.shop.model;

public class Product {
    private int productId;
    private String productName;
    private String productDescription;
    private double price;
    private int stock;

    public Product(int productId, String productName, String productDescription, double price, int stock) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.price = price;
        this.stock = stock;
    }

    // Getters and setters for the fields
    // (You may choose to omit setters if you don't want to allow modification of fields)
    public int getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public double getPrice() {
        return price;
    }

    public int getStock() {
        return stock;
    }
}







