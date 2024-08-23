import { test, expect } from '@playwright/test';
import { ChekcBoxFunction } from '../pages/checkboxPage';


test('Page should contain check boxes', async ({ page, baseURL }) => {
    const checkBoxFunction = new ChekcBoxFunction(page)
    await checkBoxFunction.goto('${baseURL}/checkboxes')
    await checkBoxFunction.waitForCheckBoxesToBeVisible()

});

test('Verify by default checkbox one is unchecked ', async ({ page }) => {
    const checkBoxFunction = new ChekcBoxFunction(page)
    checkBoxFunction.verifyCheckBoxOneIsChecked()

})


test('Verify user should able to click on check box one ', async ({ page }) => {
    const checkBoxFunction = new ChekcBoxFunction(page)
    checkBoxFunction.clickOnCheckBoxOne()

})


test('Verify check box one is checked now ', async ({ page }) => {
    const checkBoxFunction = new ChekcBoxFunction(page)
    checkBoxFunction.verifyCheckBoxOneIsChecked()

})

test('Verify by default checkbox two is checked', async ({ page }) => {
    const checkBoxFunction = new ChekcBoxFunction(page)
    await checkBoxFunction.verifyCheckBoxTwoChecked()

})





