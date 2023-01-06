import searchPage from "../pages/searchPage";
import contactMePage from "../pages/contactMePage"
import mainPage from "../pages/mainPage";
import menuPage from "../pages/menuPage";
import loginPage from "../pages/loginPage";
import easyRegisterPage from "../pages/easyRegisterPage";

describe('Testing Telnyx site', function () { 
    
    
    before(() => {
      cy.fixture('fixture').then(data => {
        this.data = data;
      });

    })
  
    beforeEach(() => {
        
        cy.clearCookies()
        cy.visit('/');  
        cy.contains('Accept and close').click();
        
    })

    afterEach(() => {
        
        cy.screenshot({capture: 'viewport'});

    })

    let email = (Math.random() + 1).toString(36).substring(5) + '@example.com';
    let password = (Math.random() + 1).toString(36).substring(5) + '@Example';
    let randomText = (Math.random() + 1).toString(36).substring(5);

    describe('Testing Media Links', () => {
      
      it('TS_0001_1 To check clickability, link to Linkedin', function (){ 
        
        mainPage.scrollToFooter();
        mainPage.clickLinkedinLink();

      });

      it('TS_0001_2 To check clickability, link to Facebook', function (){
      
        mainPage.scrollToFooter();
        mainPage.clickFacebookLink();
        cy.url().should('include','Telnyx');    
  
      }); 

      it('TS_0001_3 To check clickability, link to Twitter', function (){  
        
        mainPage.scrollToFooter();
        mainPage.clickTwitterLink();
        cy.url().should('include','telnyx');
        
      });

    });

    it('TS_0002 To test search results page with valid data', function (){ 

      searchPage.clickSupportCenter();
      searchPage.inputValidData();
      searchPage.elements.searchResult('have.text','telephone');
      
    });
  

    it('TS_0003 To test search results page with invalid data', function (){ 
      
      searchPage.clickSupportCenter();
      searchPage.inputInvalidData(randomText);
      searchPage.elements.searchNoResult('have.text','We couldn\'t find any articles for:')
          
    });    

    it('TS_0004 To test contact me form with positive scenario', () => {   
      
      contactMePage.clickTalkToExpert();
      contactMePage.selectReasonMenu();
      contactMePage.fillingForm(this.data.Username, email, this.data.PhoneNumber);
      contactMePage.selectPhoneNumber();
      contactMePage.selectPrimaryInterest();
      contactMePage.clickSubmitButton();
      contactMePage.elements.title()
        .should('be.visible').and('have.text','Thanks for Reaching Out!')       

    }); 

    it('TS_0005 To test contact me form with empty fields', function (){   
      
      contactMePage.clickTalkToExpert();     
      contactMePage.clickSubmitButton(); 
      contactMePage.elements.alertMessage()
        .should('be.visible')
        .and('have.text','This field is required.');
           
    }); 

    it('TS_0006 To test contact me form with invalid data', function (){   
      
      contactMePage.clickTalkToExpert(); 
      contactMePage.selectReasonMenu();
      contactMePage.fillingForm(randomText, randomText, randomText);
      contactMePage.selectPhoneNumber();
      contactMePage.selectPrimaryInterest();
      contactMePage.clickSubmitButton();
      contactMePage.elements.alertMessage()
        .should('be.visible')
        .and('have.text','Must be valid email. example@yourdomain.com');

    }); 

    it('TS_0007 To check the password recovery function', function (){   
      
      loginPage.clickLoginLink();
      loginPage.clickForgotPasswordLink();
      loginPage.inputEmail(email);
      loginPage.clickResetButton();
           
    }); 

    it('TS_0008 To test the positive login scenario', () => {   
      
      easyRegisterPage.inputEmail(email);
      easyRegisterPage.clickTryForFree(); 
      easyRegisterPage.fillForm(this.data.Username, password);
      easyRegisterPage.clickCreateButton();
       
    }); 

    it('TS_0009_1 To check products menu', function (){ 
      
      menuPage.hoverProducts();
      menuPage.visibleProductsList();
      menuPage.clickElastic();
      
    });

    it('TS_0009_2 To check products menu', function (){ 
      
      menuPage.hoverProducts();
      menuPage.visibleProductsList(); 
      menuPage.clickVoiceApi();

    });

    it('TS_0009_3 To check products menu', function (){ 
      
      menuPage.hoverProducts();
      menuPage.visibleProductsList();  
      menuPage.clickGlobalNumbers();
    });

    it('TS_0010 To check the link to the call', function (){   
      
      mainPage.clickCallUsLink();
      mainPage.elements.callDialog()
        .should('be.visible')
        .and('have.text','Talk to an Expert');
      
    }); 
    


}) 