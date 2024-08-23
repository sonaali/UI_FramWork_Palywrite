import { test, expect } from '@playwright/test';
import { AddRemoveElementPage } from '../pages/addRemoveElementPage';


test('Page should contain Add Remove element label', async ({ page, baseURL }) => {
    const addRemovePage = new AddRemoveElementPage(page);
    await addRemovePage.goto('baseURL/add_remove_elements')
    await addRemovePage.verifyTextOnPage()

});

test('User should able to click on add element button', async ({ page }) => {
    const addRemovePage = new AddRemoveElementPage(page);
    await addRemovePage.clickOnAddBtn()

})

test('It should appeared new delete button after click on Add Element button', async ({ page }) => {
    const addRemovePage = new AddRemoveElementPage(page);
    await addRemovePage.verifyNewAddButtonOPage()

})


test('It should remove newly added delete button once user click on Delete button', async ({ page }) => {
    const addRemovePage = new AddRemoveElementPage(page);
    await addRemovePage.clickOnDeleteBtn()

})

test('Verify newly added delete button get removed after click on it', async ({ page }) => {
    const addRemovePage = new AddRemoveElementPage(page);
    await addRemovePage.clickOnDeleteBtn()

})





