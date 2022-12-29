class contactMePage {

    elements ={

        talkToExpertLink : () => cy.contains('Talk to an expert'),
        reasonMenu : () => cy.get('#Reason_for_Contact__c'),
        firstName : () => cy.get('#FirstName'),
        lastName : () => cy.get('#LastName'),
        emailField : () =>  cy.get('#Email'),
        phoneNumberSelect : () => cy.get('#Phone_Number_Extension__c'),
        phoneNumber : () => cy.get('#Phone_Number_Base__c'),
        companySite : () =>  cy.get('#Website'),
        primaryInterest : () => cy.get('#Use_Case_Form__c'),
        submitButton : () => cy.get('span > button'),
        title : () => cy.get('#__next > div > main > div > h1'),
        alertMessage : () => cy.get('.mktoError'),

    }

    clickTalkToExpert(){

        this.elements
            .talkToExpertLink()
            .click({ force: true }); 

    }

    selectReasonMenu(){

        this.elements
            .reasonMenu()
            .select('Sales Inquiry');
    }

    fillingForm(userName, email, phoneNumber){

        this.elements
            .firstName()
            .type(userName)
            .should('have.value', userName);
    
        this.elements
            .lastName()
            .type(userName)
            .should('have.value', userName);

        this.elements
            .emailField()
            .type(email)
            .should('have.value', email);

        this.elements
            .phoneNumber()
            .type(phoneNumber)
            .should('have.value', phoneNumber);

        this.elements
            .companySite()
            .type(userName)
            .should('have.value', userName);

    }

    selectPhoneNumber(){
        this.elements
            .phoneNumberSelect()
            .select('+370'); 
    }

    selectPrimaryInterest() {
        this.elements
            .primaryInterest()
            .select('Conversational Messaging');
    }

    clickSubmitButton(){
        this.elements
            .submitButton()
            .click(); 
    }


}

module.exports = new contactMePage();