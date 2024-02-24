import { $ } from '@wdio/globals'



class LoginPage {

    get email() {
        return $(`//android.widget.EditText[@resource-id="email"]`)
    }

    get password() {
        return $(`//android.widget.EditText[@resource-id="password"]`)
    }

    get btnLogin() {
        return $(`//android.widget.TextView[@text="Login"]`)
    }

    get btnSignUp() {
        return $(`//android.widget.TextView[@text="Sign up"]`);
    }

    async login(email, password) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }

    async createAccount() {
        await this.btnSignUp.click();
    }
}

export default new LoginPage();
