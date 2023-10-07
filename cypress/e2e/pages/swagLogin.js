export class SwagLogin {
    elements = {
        username: () => cy.get("#user-name"),
        password: () => cy.get("#password"),
        login: () => cy.get("#login-button"),
    };

    loginSuccessful(){
        this.elements.username().type("standard_user");
        this.elements.password().type("secret_sauce");
        this.elements.login().click();
    }
    
    loginFail(){
        this.elements.username().type("non-standard_user");
        this.elements.password().type("wrong_sauce");
        this.elements.login().click();
    }
}
