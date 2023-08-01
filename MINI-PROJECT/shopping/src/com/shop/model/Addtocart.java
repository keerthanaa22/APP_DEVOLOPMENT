package com.shop.model;

public class Addtocart {
	//encapsulation
    private Product product;
    private int quantity;

    public Addtocart(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public int getQuantity() {
        return quantity;
    }
}
