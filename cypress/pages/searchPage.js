class searchPage{

    

    elements ={
    
        supportCenterLink : () => cy.get('header a:nth-child(3)'),  
        searchInput : () => cy.get('input[type="text"]'),
        searchResult : () => cy.get('.g__space.search-results__row'),
        searchNoResult : () => cy.get('div > span'),
    }
    
    
    clickSupportCenter(){
    
        this.elements
            .supportCenterLink()
            .click({ force: true });

    }

    inputValidData(){

        this.elements
            .searchInput()
            .type('telephone{enter}');

    }

    inputInvalidData(randomText){
        
        this.elements
            .searchInput()
            .type(randomText)
            .type('{enter}')

    }
    
    }
    
    
    module.exports = new searchPage();