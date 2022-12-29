class menuPage {

    elements ={

        products : () => cy.contains('Products'),
        productsList : () =>  cy.get('.sc-7b3980dc-8.iWLbyI'),
        elastic : () => cy.contains('Elastic SIP Trunking'),
        titleElastic : () => cy.get('.sc-31a8cefb-6.eCGKsC > span'),
        voiceApi : () => cy.contains('Voice API'),
        titleVoiceApi : () => cy.get('h1 > span'),
        globalNumbers : () => cy.contains('Global Numbers'),
        titleGlobalNumbers : () => cy.get('h1 > span > strong'),
        
    }

    hoverProducts(){

        this.elements
            .products()
            .trigger('mouseover');
    }

    visibleProductsList(){

        this.elements
            .productsList()
            .invoke('show');
    }

    clickElastic(){

        this.elements
            .elastic()
            .invoke('show')
            .click({force: true});
        
        cy.url().should('include','sip-trunks');
        
        this.elements
            .titleElastic()
            .should('be.visible')
            .and('have.text','Flexible SIP Trunks from a global provider');
    }

    clickVoiceApi(){

        this.elements
            .voiceApi()
            .invoke('show')
            .click({force: true});

        cy.url().should('include','voice-api');

        this.elements
            .titleVoiceApi()
            .should('be.visible')
            .and('have.text','Voice API');
    }

    clickGlobalNumbers(){

        this.elements
            .globalNumbers()
            .invoke('show')
            .click({force: true})

        cy.url().should('include','phone-numbers');

        this.elements
            .titleGlobalNumbers()
            .should('be.visible')
            .and('have.text','Buy business numbers on demand.');
    }
}

module.exports = new menuPage();