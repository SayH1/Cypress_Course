/// <reference types="cypress" />

describe('Swag Labs E2E', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/");
    });
    it('should be able to login', () => {
        //perform actions
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();

        //assertion
        cy.url().should("contain", "inventory.html");
    });
});