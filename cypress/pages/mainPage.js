class mainPage {

    elements={

        footer : () => cy.get('body > div > div > footer'),
        facebookLink : () => cy.contains('Follow on Facebook'),
        twitterLink : () => cy.contains('Follow on Twitter'),
        linkedinLink : () => cy.contains('Connect on LinkedIn'),
        callUsLink : () => cy.contains('Call Us'),
        callDialog : () => cy.get('#telnyx-click2call-dialog > div > div > h4')
        

    }

    scrollToFooter(){
        
        this.elements
            .footer()
            .scrollIntoView();
    }

    clickLinkedinLink(){

        this.elements
            .linkedinLink()
            .invoke('attr', 'href')
            .then(href => {
            expect(href).to.be.equal('https://www.linkedin.com/company/telnyx/');
          });
    }

    clickTwitterLink(){

        this.elements
            .twitterLink()
            .invoke('removeAttr', 'target')
            .click();
    
    }

    clickFacebookLink(){

        this.elements
            .facebookLink()
            .invoke('removeAttr', 'target')
            .click({ force: true });
    }

    clickCallUsLink (){

        this.elements
            .callUsLink()
            .click({force: true});
        }
}
module.exports = new mainPage();