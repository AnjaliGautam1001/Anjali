let login = function () {
    this.url = function (url) {
        browser.get(url);
    }

    var un = element(by.id('email'));
    this.un1 = function (uname) {
        un.sendKeys(uname);
    }

    var pwd = element(by.id('password'));
    this.pwd2 = function (pwwd) {
        pwd.sendKeys(pwwd);
    }

    var loginButton = element(by.id('form_submit_btn'));
    this.login1 = function () {
        loginButton.sendKeys(protractor.Key.ENTER);
    }
    this.login2 = function () {
       return loginButton;
    }

    }
    module.exports = new login();
    