describe('Testing Telnyx site', function () { 
    
    beforeEach(() => {
        cy.visit('/');  
        cy.contains('Accept and close').click();
        cy.clearCookies()
        
      })

    afterEach(() => {
        
        cy.screenshot({capture: 'viewport'});

    })

    let userName = ('User');
    let email = (Math.random() + 1).toString(36).substring(5) + '@example.com';
    let phoneNumber = ('971111111');
    let password = (Math.random() + 1).toString(36).substring(5) + '@Example';
    let randomText = (Math.random() + 1).toString(36).substring(5);

    it('TS_0001_1', function (){ 
        cy.get('body > div > div > footer').scrollIntoView();
        cy.contains('Connect on LinkedIn')
          .invoke('attr', 'href')
          .then(href => {
            expect(href).to.be.equal('https://www.linkedin.com/company/telnyx/');
          });
    });
    it('TS_0001_2', function (){  
        cy.get('body > div > div > footer').scrollIntoView();       
        cy.contains('Follow on Twitter').invoke('removeAttr', 'target').click().wait(6000);
        cy.url().should('include','telnyx');
           
    });
    it('TS_0001_3', function (){
        cy.get('body > div > div > footer').scrollIntoView();
        cy.contains('Follow on Facebook').invoke('removeAttr', 'target').click({ force: true });
        cy.url().should('include','Telnyx');
                   
    }); 

    it('TS_0002', function (){ 
    
      cy.get('header a:nth-child(3)').click({ force: true }); 
      cy.get('input[type="text"]').type('telephone{enter}');
      cy.get('.g__space.search-results__row')
        .then(($div) => {
        expect($div).to.contain('telephone')
        });
      
    }); 

    it('TS_0003', function (){ 
      
      let text = (Math.random() + 1).toString(36).substring(5);
      cy.get('header a:nth-child(3)').click({ force: true }); 
      cy.get('input[type="text"]')
        .type(text)
        .type('{enter}')
      cy.get(' div > span')
          .then(($div) => {
          expect($div).to.have.text('We couldn\'t find any articles for:');
          });    

    }); 

    it('TS_0004', function (){   
      
      cy.contains('Talk to an expert').click({ force: true }); 
      cy.get('#Reason_for_Contact__c').select('Sales Inquiry');
      cy.get('#FirstName')
        .type(userName).should('have.value', userName);
      cy.get('#LastName')
        .type(userName).should('have.value', userName);
      cy.get('#Email')
        .type(email).should('have.value', email);
      cy.get('#Phone_Number_Extension__c').select('+370');  
      cy.get('#Phone_Number_Base__c')
        .type(phoneNumber).should('have.value', phoneNumber);
        cy.get('#Website')
        .type(userName).should('have.value', userName);
      cy.get('#Use_Case_Form__c').select('Conversational Messaging');
        
      cy.get('span > button').click(); 
      cy.get('#__next > div > main > div > h1').should('be.visible').and('have.text','Thanks for Reaching Out!')
           

    }); 

    it('TS_0005', function (){   
      
      cy.contains('Talk to an expert').click({ force: true });     
      cy.get('span > button').click(); 
      cy.get('.mktoError').should('be.visible').and('have.text','This field is required.');
           
    }); 
    it('TS_0006', function (){   
      
      cy.contains('Talk to an expert').click({ force: true }); 
      cy.get('#Reason_for_Contact__c').select('Sales Inquiry');
      cy.get('#FirstName')
        .type(randomText).should('have.value', randomText);
      cy.get('#LastName')
        .type(randomText).should('have.value', randomText);
      cy.get('#Email')
        .type(randomText).should('have.value', randomText);
      cy.get('#Phone_Number_Extension__c').select('+370');  
      cy.get('#Phone_Number_Base__c')
        .type(randomText).should('have.value', randomText);
        cy.get('#Website')
        .type(randomText).should('have.value', randomText);
      cy.get('#Use_Case_Form__c').select('Conversational Messaging');
        
      cy.get('span > button').click(); 
      cy.get('.mktoError').should('be.visible').and('have.text','Must be valid email. example@yourdomain.com');
                     

    }); 

    it('TS_0007', function (){   
      
      cy.contains('Log In').click();     
      cy.contains('Forgot your password?').click();
      cy.get('input').type(email)
      cy.contains('Reset password').click();
      cy.get('.Message__MessageCopy-izQIRg').should('be.visible').and('have.text','We have accepted your password reset request. If you have a Telnyx account and are unable to reset your password successfully, please contact support for assistance.Log in');
           
    }); 

    it('TS_0008', function (){   
      
      cy.get('input[type="email"]').type(email)
      cy.contains('Try for free').click(); 
      cy.get('#full_name').type(userName);
      cy.get('#password').type(password);
      cy.get('#terms_and_conditions').check({force: true})
      cy.contains('Create Account').click();
      // cy.get('#__next > div> main > div > h1')
      //   .should('be.visible').and('have.text','We\'ve sent you an email to activate your account')
      //   .wait(5000)
      // can't do above action, through Capcha
    }); 
    it('TS_0009_1', function (){ 
      
      cy.contains('Products').trigger('mouseover')
      cy.get('.sc-7b3980dc-8.iWLbyI').invoke('show')  
      cy.contains('Elastic SIP Trunking').invoke('show').click({force: true})
      cy.url().should('include','sip-trunks');
      cy.get('.sc-31a8cefb-6.eCGKsC > span')
        .should('be.visible').and('have.text','Flexible SIP Trunks from a global provider')
     });

    it('TS_0009_2', function (){ 
      
      cy.contains('Products').trigger('mouseover')
      cy.get('.sc-7b3980dc-8.iWLbyI').invoke('show')  
      cy.contains('Voice API').invoke('show').click({force: true})
      cy.url().should('include','voice-api');
      cy.get('h1 > span')
        .should('be.visible').and('have.text','Voice API')
    });

    it('TS_0009_3', function (){ 
      
      cy.contains('Products').trigger('mouseover')
      cy.get('.sc-7b3980dc-8.iWLbyI').invoke('show')  
      cy.contains('Global Numbers').invoke('show').click({force: true})
      cy.url().should('include','phone-numbers');
      cy.get('h1 > span > strong')
        .should('be.visible').and('have.text','Buy business numbers on demand.')
    });

    it('TS_0010', function (){   
      
      cy.contains('Call Us').click({force: true}); 
      cy.get('#telnyx-click2call-dialog > div > div > h4').should('be.visible').and('have.text','Talk to an Expert');
      
    }); 
    


    }) 