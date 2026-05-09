Feature: Ecommerce validations

    @Regression
    Scenario: Placing the order
        Given A login to Ecommerce Application with "mahesharokade7@gmail.com" and "Mahesh123@"
        When  Add "ZARA COAT 3" to cart
        Then  Verify "ZARA COAT 3" is displayed in the cart
        When Enter valid deatils and place the order
        Then Verify orderis present in the order history page