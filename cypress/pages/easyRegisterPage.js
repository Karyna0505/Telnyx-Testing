
class easyRegisterPage {

    elements ={
        emailField : () => cy.get('input[type="email"]'),
        tryForFreeButton : () =>  cy.contains('Try for free'),
        fullName : () => cy.get('#full_name'),
        password : () => cy.get('#password'),
        conditions : () =>  cy.get('#terms_and_conditions'),
        createButton : () => cy.contains('Create Account'),
    }

    inputEmail(email){

        this.elements
            .emailField()
            .type(email)
    }

    clickTryForFree(){

        this.elements
            .tryForFreeButton()
            .click(); 
    }

    fillForm(userName, password){

        this.elements
            .fullName()
            .type(userName);

        this.elements
            .password()
            .type(password);

        this.elements
            .conditions()
            .check({force: true})
    }
    
    clickCreateButton(){

        this.elements
            .createButton()
            .click();
    }

    
}
module.exports = new easyRegisterPage();