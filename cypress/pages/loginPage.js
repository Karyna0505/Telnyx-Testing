class loginPage {

    elements ={
        loginLink : () =>  cy.contains('Log In'),
        forgotPasswordLink : () => cy.contains('Forgot your password?'),
        emailField : () => cy.get('input'),
        resetButton : () => cy.contains('Reset password'),
        message : () => cy.get('.Message__MessageCopy-izQIRg'),
    }

    clickLoginLink(){

        this.elements
            .loginLink()
            .click(); 
    }

    clickForgotPasswordLink(){

        this.elements
            .forgotPasswordLink()
            .click();
    }

    inputEmail(email){

        this.elements
            .emailField()
            .type(email);
    }

    clickResetButton(){

        this.elements
            .resetButton()
            .click();

        this.elements
            .message()
            .should('be.visible')
            .and('have.text','We have accepted your password reset request. If you have a Telnyx account and are unable to reset your password successfully, please contact support for assistance.Log in');
    }

    

    


}

module.exports = new loginPage();