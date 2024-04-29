/// <reference types="cypress" />
import { SwagLogin } from "../pages/swagLogin";
import { SwagInventory } from "../pages/swagInventory";

describe("Swag Labs Login page", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/");
    });
    it("should be able to login", () => {
        //preparation
        const login = new SwagLogin();
        //perform actions

        //Old
        cy.get("#user-name").type("username1234");
        cy.get("#password").type("password1234");
        cy.get("#login-button").click();


        //New
        // login.elements.username().type("standard_user");
        // login.elements.password().type("secret_sauce");
        // login.elements.login().click();
        login.loginSuccessful();

        //assertion
        cy.url().should("contain", "inventory.html");
    });

    it("should fail to login", () => {
        //perform actions
        cy.get("#user-name").type("non-standard_user");
        cy.get("#password").type("wrong_sauce");
        cy.get("#login-button").click();

        //assertion
        cy.get('[data-test="error"]').should("be.visible");
    });
});

describe("Swag Labs E2E", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/");
        const login = new SwagLogin();
        login.loginSuccessful();
    });

    it("should be able to add items to the shopping cart", () => {
        //preparation
        const inventory = new SwagInventory();
        //assertion
        inventory.elements.cartbadge().should("not.exist");
        //perform actions
        inventory.elements.addToCartText().eq(0).click();
        //assertion
        inventory.elements.cartbadge().should("be.visible");
    });

    it("should be able to sort using the filter", () => {
        //preparation
        const inventory = new SwagInventory();
        //perform actions
        inventory.elements.filter().select("za");

        //assertion
        inventory.elements.firstProduct().find(".inventory_item_name").should("have.text", "Test.allTheThings() T-Shirt (Red)");
    });

    it.only("should be able to checkout successfully", () => {
        //preparation
        const inventory = new SwagInventory();
        //Inventory page
        inventory.elements.addToCartText().eq(0).click();
        cy.get("#shopping_cart_container").click();
        cy.get(".checkout_button").click();
        //Your Information page
        cy.get("#first-name").type("Firstname1234!@#$");
        cy.get("#last-name").type("Lastname1234!@#$");
        cy.get("#postal-code").type("asdfb12345");
        cy.get(".cart_button").click();
        //Checkout Overview page
        //What if we want a generic E2E that always add the 1st available product
        //and check if it calculates the fee correctly or not?
        let subTotal = 0;
        let tax = 0;
        let total = 0;
        cy.get(".summary_subtotal_label").then(($ele) => {
            let split = $ele.text().split(": $");
            subTotal = split[1];
            cy.log("Split: " + split);
            cy.log("Sub Total: " + subTotal);
        });
        cy.get(".summary_tax_label").then(($ele) => {
            let split = $ele.text().split(": $");
            tax = split[1];
            cy.log("Split: " + split);
            cy.log("Tax: " + tax);
        });
        cy.get(".summary_total_label").then(($ele) => {
            let split = $ele.text().split(": $");
            total = split[1];
            cy.log("Split: " + split);
            cy.log("Total: " + total);
        });
        cy.then(() => {
            cy.wrap(+total).should("eq", +subTotal + +tax);
        });
        //assertion
        cy.get(".cart_button").click();
        cy.get(".complete-header").should("be.visible");
    });
});
