import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { JsonHelper } from '../utils/JsonHelper';

const testData = JsonHelper.loadData();

test.describe('Search tests', () => {
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto(testData.baseurl);
        await page.waitForTimeout(3000);
    });

    test.afterAll(async () => {
        await page?.close();
    });

    test('Search product and verify results', async () => {
        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page);

        await homePage.searchProduct(testData.productName);

        const results = await searchPage.getSearchResults();

        console.log('Searchdghgdhgdg Results:', results); //

        expect(results.toLowerCase()).toContain(testData.productName.toLowerCase());
    });


    test("Search Electronic from the dropdown and verify first searcg results", async () => {

    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    await homePage.selectCategory(testData.categoryName); //select electronics and click on search button
    })


    test("Hover on account and click on sign in", async () => {

        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page);

        await homePage.hoverAccountAndClickSignIn();
       // await page.pause();
    })
    test("Search product and click on first product", async () => {

        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page);

        await homePage.searchProduct(testData.productName);
        await searchPage.productclick(testData.productName);
      //  await page.pause();
    }   )
});



