import { test, expect } from '@playwright/test';
import { AbTestPage } from '../pages/abTestPage';


test('Ab test page should contain A/B Test Control label', async ({ page, baseURL }) => {
    const abTestPage = new AbTestPage(page);
    await abTestPage.goto('baseURL/abtest')
    await abTestPage.verifyContent()

});

test('Ab test page should contained description section', async ({ page }) => {
    const abTestPage = new AbTestPage(page)
    await abTestPage.waitForParagraphToBeVisible()

})


test('Ab test page user should able to click on selenium element link and open new browser window', async ({ page,context }) => {
    const abTestPage = new AbTestPage(page)
    const pageOne = await context.newPage();
    await abTestPage.clickOnSeleniumLink()
    expect(pageOne.url()).toContain('elementalselenium')

})








