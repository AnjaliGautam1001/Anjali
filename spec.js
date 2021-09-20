var login = require('./loginPOM.js');
var xlsx2 = require('xlsx');
var path = require('path');
var workbook = xlsx2.readFile('./dataSheet.xlsx');
var worksheet = workbook.Sheets['sheet'];

describe('WebAutomation', function () {
   
    it('Login Page TestCases', function () {
        // browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get("https://accounts.datoms.io/login");

        login.url(worksheet['A2'].v);
        browser.sleep(500);

        login.un1(worksheet['B2'].v);
        browser.sleep(500);

        login.pwd2(worksheet['C2'].v);
        browser.sleep(500);

        login.login1();
        browser.sleep(2000);

        // we can aplly validation after login page like we will validate  some attribute or value to check landing page is expected or not
    })

})

