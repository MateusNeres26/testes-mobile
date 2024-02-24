import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import registerPage from '../pageobjects/register.page.js'
import faker from 'faker';


// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await homePage.openMenu();
//         await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
//         await homePage.openMenu('profile');
//         expect ((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy();
        
//         await driver.pause(10000);
//     })
// });

describe('Registro de conta', () => {
    it('Deve realizar cadastro com suecsso', async () => { 
        await homePage.openMenu();
        await loginPage.createAccount();
       
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phoneNumber = faker.phone.phoneNumberFormat();
        const email = faker.internet.email();
        const password = faker.internet.password();
        
        await registerPage.register(firstName, lastName, phoneNumber, email, password, password);
        expect ((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy();
    })
});

