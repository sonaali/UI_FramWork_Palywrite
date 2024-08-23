import { test, expect } from '@playwright/test';
import { ForgotpasswordPage } from '../pages/forgotpasswordPage';


test('Verify page should contain forgot password lable', async ({ page, baseURL }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    await forgotPassword.goto('baseURL/forgot_password')
    await forgotPassword.verifyForgotPasswordLableOnPage()

});

test('Verify page should contain email lable ', async ({ page }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    forgotPassword.verifyEmailLabaleOnPage()

})


test('Verify user able to enter email to email input feild', async ({ page }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    forgotPassword.enterEmail("test@gemail.com")

})

test('Verify user able to click on retrieve password Button', async ({ page }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    forgotPassword.clickOnRetrievePassword()

})

test('Verify it appeared new browser window  once click on retrieve password Button ', async ({ context }) => {
    //const forgotPassword = new ForgotpasswordPage(page)
    //forgotPassword.verifyErrorMessage()

    const pageOne = await context.newPage();
    expect(pageOne.url()).toContain('google')


})










