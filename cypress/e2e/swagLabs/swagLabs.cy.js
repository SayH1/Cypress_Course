/// <reference types="cypress" />
import { SwagLogin } from "../pages/swagLogin";

describe("Swag Labs E2E", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/");
    });
    it("should be able to login", () => {
        //preparation
        const login = new SwagLogin();
        //perform actions
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

    it("should be able to add items to the shopping cart", () => {
        //perform actions
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();

        //assertion
        cy.get(".shopping_cart_badge").should("not.exist");
        //perform actions
        cy.contains("ADD TO CART").eq(0).click();
        //assertion
        cy.get(".shopping_cart_badge").should("be.visible");
    });

    it("should be able to sort using the filter", () => {
        //perform actions
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();

        cy.get(".product_sort_container").select("za");

        //assertion
        cy.get(".inventory_item").eq(0).find(".inventory_item_name").should("have.text", "Test.allTheThings() T-Shirt (Red)");
    });

    it("should be able to checkout successfully", () => {
        //perform actions
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        //Inventory page
        cy.contains("ADD TO CART").eq(0).click();
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
