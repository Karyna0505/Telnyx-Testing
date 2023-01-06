.......................................###.....................................

Cypress Test runner "TELNYX" project

.......................................###.....................................

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least v18.12.1)
- Clone and checkout the github project 

    ```bash 
    git clone https://github.com/Karyna0505/Telnyx-testing
- Go to the terminal and execute inside the checked out folder

    ```bash 
    npm install 
### How to run the tests 

I defined a default configuration (cypress.config.js)  which will be executed when you run.  To run cypress from the command line, type in the terminal

    npm run test
or

    npx cypress run
    
More details how to run on the link https://docs.cypress.io/guides/getting-started/opening-the-app#What-you-ll-learn

### Mochawesome Report

To generate a report for all specs in the integration folder of the Cypress project, run the command given below −

    npx cypress run

