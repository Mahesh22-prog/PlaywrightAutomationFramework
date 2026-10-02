import { Page } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class SearchPage extends BasePage
{
    constructor(page: Page)
    {
        super(page, "searchResultsPage");
    }

    async getSearchResults()
    {
        const resultItems = this.page.locator(this.locators.searchResult);
        await resultItems.first().waitFor({ state: "attached", timeout: 20000 });
        const results = await resultItems.allTextContents();
        return results.join(" ");
    }

    async productclick(productName: string)
    {

        await this.click("productclick");
    }

}
