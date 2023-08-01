package com.shop.model;

import java.sql.*;
import java.util.Scanner;
abstract class AbstractAdminSystem {
    abstract boolean isAdminLogin(Scanner scanner, Connection connection) throws SQLException;

}
class MySQLDatabase {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/pricedb";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "12345";

    // Method to get a database connection
    static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }
}

public class AdminSystem extends AbstractAdminSystem  {
    
    public static void main(String[] args) {
    	try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = MySQLDatabase.getConnection();
            System.out.println("Connected to the database.");

            Scanner scanner = new Scanner(System.in);
            AdminSystem adminSystem = new AdminSystem();

            if (adminSystem.isAdminLogin(scanner, connection)) {
                System.out.println("Admin login successful.");
                System.out.println("Enter product details to add (name, description, price, quantity): ");
                String name = scanner.nextLine();
                String description = scanner.nextLine();
                double price = scanner.nextDouble();
                int quantity = scanner.nextInt();

                adminSystem.addProduct(connection, name, description, price, quantity);

                // Display added product in the cart
                adminSystem.displayAddedProduct(name, description, price, quantity);

                // View Cart
                System.out.println("View Cart (User ID): ");
                int userId = scanner.nextInt();
                adminSystem.viewCart(connection, userId);
            } else {
                System.out.println("Invalid admin credentials. Exiting...");
            }

            connection.close();
            System.out.println("Disconnected from the database.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Override
	public
    boolean isAdminLogin(Scanner scanner, Connection connection) throws SQLException {
      
        System.out.println("Please enter your admin username: ");
        String adminUsername = scanner.nextLine();

        System.out.println("Please enter your admin password: ");
        String adminPassword = scanner.nextLine();

        String query  = "SELECT * FROM admin WHERE username = ? AND password = ?";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, adminUsername);
        preparedStatement.setString(2, adminPassword);

        ResultSet resultSet = preparedStatement.executeQuery();
        boolean isAdmin = resultSet.next();
        resultSet.close();
        preparedStatement.close();
        return isAdmin;
    }

    private static void addProduct(Connection connection, String name, String description, double price,int quantity) throws SQLException {
        String query = "INSERT INTO products (name, description, price,quantity) VALUES (?, ?, ?,?)";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, name);
        preparedStatement.setString(2, description);
        preparedStatement.setDouble(3, price);
        preparedStatement.setInt(4, quantity);

        int rowsAffected = preparedStatement.executeUpdate();
        if (rowsAffected > 0) {
            System.out.println("Product added successfully.");
        } else {
            System.out.println("Failed to add the product.");
        }
        preparedStatement.close();
    }

    private static void displayAddedProduct(String name, String description, double price, int quantity) {
        System.out.println("Added Product in Cart:");
        System.out.println("Name: " + name);
        System.out.println("Description: " + description);
        System.out.println("Price: $" + price);
        System.out.println("Quantity: "+quantity);
        System.out.println();
    }

    private static void viewCart(Connection connection, int userId) throws SQLException {
        String query = "SELECT products.name, products.description, products.price " +
                       "FROM products " +
                       "JOIN cart ON products.product_id = cart.product_id " +
                       "WHERE cart.user_id = ?";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, userId);

        ResultSet resultSet = preparedStatement.executeQuery();

        if (resultSet.next()) {
            System.out.println("User ID: " + userId);
            System.out.println("Products in Cart:");

            do {
                String name = resultSet.getString("name");
                String description = resultSet.getString("description");
                double price = resultSet.getDouble("price");

                System.out.println("Name: " + name);
                System.out.println("Description: " + description);
                System.out.println("Price: $" + price);
                System.out.println();
            } while (resultSet.next());
        } else {
            System.out.println("No products found in the cart for User ID: " + userId);
        }

        resultSet.close();
        preparedStatement.close();
    }
}