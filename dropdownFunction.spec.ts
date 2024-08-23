import { test, expect } from '@playwright/test';
import { DropDownPage } from '../pages/dropdownPage';


test('Verify page should contain dropdown list label', async ({ page, baseURL }) => {
    const dropDown = new DropDownPage(page)
    await dropDown.goto('baseURL/dropdown')
    await dropDown.verifyPageContainDropDownLabel()

});

test('Verify user should be select option one from list ', async ({ page }) => {
    const dropDown = new DropDownPage(page)
    dropDown.selectOption('1')
})


test('Verify user should be select option two from list ', async ({ page }) => {
    const dropDown = new DropDownPage(page)
    dropDown.selectOption('2')
})






