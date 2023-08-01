package com.shop.main;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;
import java.util.*;


//inheritance 
class Printfirst{
	void test() {
		System.out.println("WELCOME TO ONLINE SHOPPING");
	}
}
class Print extends Printfirst{
	void shop() {
		System.out.println("Enter the field");
	}
}

// Abstract class to represent a user
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
}

// Subclass representing a customer user
class Customer extends User {
    public Customer(String username, String password, String email) {
        super(username, password, email);
    }

    @Override
    public void displayMenu() {
        System.out.println("[Logged In Menu]");
        System.out.println("1. View Products");
        System.out.println("2. Add to Cart");
        System.out.println("3. View Cart");
        System.out.println("4. Place Order");
        System.out.println("5. Logout");
        System.out.print("Enter option number: ");
    }
}

// Subclass representing an admin user
class Admin extends User {
    public Admin(String username, String password, String email) {
        super(username, password, email);
    }

    @Override
    public void displayMenu() {
        System.out.println("[Admin Menu]");
        System.out.println("1. View Products");
        System.out.println("2. Add Product");
        System.out.println("3. View Cart");
        System.out.println("4. View Orders");
        System.out.println("5. Logout");
        System.out.print("Enter option number: ");
    }
}

// Abstract class to represent a product item
abstract class ProductItem {
    int Product_Id;
    String Prod_Name;
    double Price;

    public ProductItem(int Product_Id, String Prod_Name, double Price) {
        this.Product_Id = Product_Id;
        this.Prod_Name = Prod_Name;
        this.Price = Price;
    }
}

class Product extends ProductItem {
    String Prod_Description;
    int stock;

    public Product(int Product_Id, String Prod_Name, String Prod_Description, double Price, int stock) {
        super(Product_Id, Prod_Name, Price);
        this.Prod_Description = Prod_Description;
        this.stock = stock;
    }
}

class Addtocart extends ProductItem {
    int Quantity;

    public Addtocart(Product product, int Quantity) {
        super(product.Product_Id, product.Prod_Name, product.Price);
        this.Quantity = Quantity;
    }
}

public class OnlineShoppingSystem {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/Onlineshop";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "gsk22082529";

    
    private static List<Product> products = new ArrayList<>();
    private static List<Addtocart> addtocart = new ArrayList<>();
    private static User currentUser = null;
    private static int orderConfirmationNumber = 1000;

    public static void main(String[] args) {
        Print p = new Print();
        p.test();
        p.shop();
        connectToDatabase();
        initializeProducts();

        Scanner scanner = new Scanner(System.in);
        boolean exit = false;

        while (!exit) {
            if (currentUser == null) {
                System.out.println("[Main Menu]");
                System.out.println("1. Login");
                System.out.println("2. Sign Up");
                System.out.println("3. View Products");
                System.out.println("4. Exit");
                System.out.print("Enter option number: ");
                int option = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character left by nextInt()

                switch (option) {
                    case 1:
                        login(scanner);
                        break;
                    case 2:
                        signUp(scanner);
                        break;
                    case 3:
                        viewProducts();
                        break;
                    case 4:
                        exit = true;
                        break;
                    default:
                        System.out.println("Invalid option. Please try again.");
                }
            } else {
                currentUser.displayMenu();
                int option = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character left by nextInt()

                switch (option) {
                    case 1:
                        viewProducts();
                        break;
                    case 2:
                        if (currentUser instanceof Admin) {
                            addProduct(scanner);
                        } else {
                            addToCart(scanner);
                        }
                        break;
                    case 3:
                        viewCart();
                        break;
                    case 4:
                        if (currentUser instanceof Admin) {
                            viewOrders();
                        } else {
                            placeOrder();
                        }
                        break;
                    case 5:
                        currentUser = null;
                        System.out.println("Logged out successfully!");
                        break;
                    default:
                        System.out.println("Invalid option. Please try again.");
                }
            }
        }

        closeConnection();
        System.out.println("Thank you for shopping with us.");
    }

    private static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashedPassword = md.digest(password.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : hashedPassword) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

    private static Connection connection;

    private static void connectToDatabase() {
        try {
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            System.out.println("Connected to the database!");
        } catch (SQLException e) {
            System.out.println("Database connection failed. Exiting...");
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static void closeConnection() {
        try {
            if (connection != null) {
                connection.close();
                System.out.println("Database connection closed.");
            }
        } catch (SQLException e) {
            System.out.println("Error closing the database connection.");
            e.printStackTrace();
        }
    }

    private static void initializeProducts() {
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM products");

            while (resultSet.next()) {
                int Product_Id = resultSet.getInt("Product_Id");
                String Prod_Name = resultSet.getString("Prod_Name");
                String Prod_Description = resultSet.getString("Prod_Description");
                Double Price = resultSet.getDouble("Price");
                int stock = resultSet.getInt("stock");

                products.add(new Product(Product_Id, Prod_Name, Prod_Description, Price, stock));
            }

            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            System.out.println("Error fetching products from the database.");
            e.printStackTrace();
        }
    }

    private static void viewProducts() {
        System.out.println("[Product List]");
        System.out.println("ID   Name               Price   Stock");
        System.out.println("-------------------------------------");

        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM products");

            while (resultSet.next()) {
                int Product_Id = resultSet.getInt("Product_Id");
                String Prod_Name = resultSet.getString("Prod_Name");
                double Price = resultSet.getDouble("Price");
                int stock = resultSet.getInt("stock");

                System.out.printf("%-4d %-18s $%-7.2f %d%n", Product_Id, Prod_Name, Price, stock);
            }

            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            System.out.println("Error fetching products from the database.");
            e.printStackTrace();
        }

        System.out.println();
    }

    private static void addProduct(Scanner scanner) {
        System.out.println("[Add Product]");
        System.out.print("Enter the product name: ");
        String productName = scanner.nextLine();

        System.out.print("Enter the product description: ");
        String productDescription = scanner.nextLine();

        System.out.print("Enter the product price: ");
        double productPrice = scanner.nextDouble();
        scanner.nextLine(); // Consume the newline character left by nextDouble()

        System.out.print("Enter the product stock: ");
        int productStock = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character left by nextInt()

        // Generate a unique product ID (you can use more sophisticated methods)
        int Product_Id = products.size() + 1;

        // Create a new product instance
        Product newProduct = new Product(Product_Id, productName, productDescription, productPrice, productStock);

        // Add the new product to the list of products
        products.add(newProduct);

        // Save the new product to the database
        try {
            PreparedStatement addProductStmt = connection.prepareStatement("INSERT INTO products (Product_Id, Prod_Name, Prod_Description, Price, stock) VALUES (?, ?, ?, ?, ?)");
            addProductStmt.setInt(1, Product_Id);
            addProductStmt.setString(2, productName);
            addProductStmt.setString(3, productDescription);
            addProductStmt.setDouble(4, productPrice);
            addProductStmt.setInt(5, productStock);
            addProductStmt.executeUpdate();
            addProductStmt.close();
            System.out.println("Product added successfully!");
        } catch (SQLException e) {
            System.out.println("Error adding product to the database.");
            e.printStackTrace();
        }
    }

    private static void addToCart(Scanner scanner) {
        viewProducts();
        System.out.print("Enter the product ID to add to cart: ");
        int Product_Id = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character left by nextInt()

        Product selectedProduct = getProductById(Product_Id);
        if (selectedProduct == null) {
            System.out.println("Product not found. Please enter a valid product ID.");
            return;
        }

        System.out.print("Enter the quantity to add to cart: ");
        int quantity = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character left by nextInt()

        if (quantity <= 0 || quantity > selectedProduct.stock) {
            System.out.println("Invalid quantity. Please enter a valid quantity.");
            return;
        }

        Addtocart item = new Addtocart(selectedProduct, quantity);
        addtocart.add(item);

        System.out.println("Product added to cart!");
    }

    private static Product getProductById(int Product_Id) {
        for (Product product : products) {
            if (product.Product_Id == Product_Id) {
                return product;
            }
        }
        return null;
    }

    private static void viewCart() {
        if (addtocart.isEmpty()) {
            System.out.println("Your cart is empty.");
            return;
        }

        System.out.println("[Shopping Cart]");
        System.out.println("ID   Name               Price   Quantity   Total");
        System.out.println("-----------------------------------------------");
        double cartTotal = 0;

        for (Addtocart item : addtocart) {
            double Product_TotalPrice = item.Price * item.Quantity;
            System.out.printf("%-4d %-18s $%-7.2f %-10d $%-7.2f%n",
                    item.Product_Id, item.Prod_Name, item.Price, item.Quantity, Product_TotalPrice);
            cartTotal += Product_TotalPrice;
        }

        System.out.println("Cart Total: $" + cartTotal);
    }

    private static void placeOrder() {
        if (addtocart.isEmpty()) {
            System.out.println("Your cart is empty. Cannot place an order.");
            return;
        }

        // Generate an order confirmation number (you can use more sophisticated methods)
        String orderConfirmation = "ORD" + orderConfirmationNumber++;
        System.out.println("Order placed successfully!");
        System.out.println("Order Confirmation Number: " + orderConfirmation);

        // Deduct the purchased quantity from the available stock and update the database
        try {
            PreparedStatement updateStockStmt = connection.prepareStatement("UPDATE products SET stock = stock - ? WHERE Product_Id = ?");
            for (Addtocart item : addtocart) {
                updateStockStmt.setInt(1, item.Quantity);
                updateStockStmt.setInt(2, item.Product_Id);
                updateStockStmt.executeUpdate();
            }
            updateStockStmt.close();
        } catch (SQLException e) {
            System.out.println("Error updating product stock in the database.");
            e.printStackTrace();
        }

        addtocart.clear();
    }

    private static void viewOrders() {
        System.out.println("[Order History]");
        // Implement the code to view orders here
    }

    private static void login(Scanner scanner) {
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();

        System.out.print("Enter your password: ");
        String password = scanner.nextLine();
        String hashedPassword = hashPassword(password); // Hash the provided password

        try {
            PreparedStatement loginStmt = connection.prepareStatement("SELECT * FROM users WHERE username = ? AND password = ?");
            loginStmt.setString(1, username);
            loginStmt.setString(2, hashedPassword); // Use the hashed password for comparison
            ResultSet resultSet = loginStmt.executeQuery();

            if (resultSet.next()) {
                String email = resultSet.getString("email");
                currentUser = new Customer(username, hashedPassword, email); // Store the hashed password in the currentUser object
                System.out.println("Login successful!");
            } else {
                System.out.println("Invalid username or password. Please try again.");
            }

            resultSet.close();
            loginStmt.close();
        } catch (SQLException e) {
            System.out.println("Error during login process.");
            e.printStackTrace();
        }
    }

    private static void signUp(Scanner scanner) {
        System.out.print("Enter a new username: ");
        String newUsername = scanner.nextLine();

        System.out.print("Enter a new password: ");
        String newPassword = scanner.nextLine();
        String hashedPassword = hashPassword(newPassword); // Hash the new password before storing

        System.out.print("Enter your email: ");
        String email = scanner.nextLine();

        try {
            PreparedStatement signUpStmt = connection.prepareStatement("INSERT INTO users (username, password, email) VALUES (?, ? ,?)");
            signUpStmt.setString(1, newUsername);
            signUpStmt.setString(2, hashedPassword); // Store the hashed password in the database
            signUpStmt.setString(3, email);
            signUpStmt.executeUpdate();
            signUpStmt.close();

            System.out.println("Account created successfully! You can now log in.");
        } catch (SQLException e) {
            System.out.println("Error during account creation.");
            e.printStackTrace();
        }
    }
}
