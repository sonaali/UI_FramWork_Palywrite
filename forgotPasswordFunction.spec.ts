import { test, expect } from '@playwright/test';
import { ForgotpasswordPage } from '../pages/forgotpasswordPage';


test('Verify page should contain forgot password label', async ({ page, baseURL }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    await forgotPassword.goto('baseURL/forgot_password')
    await forgotPassword.verifyForgotPasswordLabelOnPage()

});

test('Verify page should contain email label ', async ({ page }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    forgotPassword.verifyEmailLabelOnPage()

})


test('Verify user able to enter email to email input field', async ({ page }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    forgotPassword.enterEmail("test@gemail.com")

})

test('Verify user able to click on retrieve password Button', async ({ page }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    forgotPassword.clickOnRetrievePassword()

})

test('Verify it appeared error message once click on retrieve password Button ', async ({ page }) => {
    const forgotPassword = new ForgotpasswordPage(page)
    forgotPassword.verifyErrorMessage()

})










