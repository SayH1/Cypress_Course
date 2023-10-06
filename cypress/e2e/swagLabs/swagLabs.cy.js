/// <reference types="cypress" />

describe("Swag Labs E2E", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/");
    });
    it("should be able to login", () => {
        //perform actions
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();

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
});
