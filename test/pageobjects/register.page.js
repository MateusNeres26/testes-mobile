import { $ } from '@wdio/globals'



class RegisterPage {

    get firstName() {
        return $(`//android.widget.EditText[@resource-id="firstName"]`);
    }
    get lastName() {
        return $(`//android.widget.EditText[@resource-id="lastName"]`);
    }
    get phoneNumber() {
        return $(`//android.widget.EditText[@resource-id="phone"]`);
    }
    get email() {
        return $(`//android.widget.EditText[@resource-id="email"]`);
    }
    get password() {
        return $(`//android.widget.EditText[@resource-id="password"]`);
    }
    get rePassword() {
        return $(`//android.widget.EditText[@resource-id="repassword"]`);
    }
    get btnCreate() {
        return $(`//android.widget.TextView[@text="Create"]`);
    }


    async register(firstName, lastName, phoneNumber, email, password, rePassword) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.phoneNumber.setValue(phoneNumber);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.rePassword.setValue(rePassword);
        await this.btnCreate.click();
    }


}
export default new RegisterPage();
