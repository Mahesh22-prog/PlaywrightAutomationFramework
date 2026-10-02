import { Page } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class HomePage extends BasePage
{
    constructor(page: Page)
    {
        super(page, "HomePage");
    }

 

    async selectCategory(categoryName: string)
    {
        await this.selectDropDown("categoryDropdown", categoryName);
        await this.click("searchButton");
    }
    async hoverAccountAndClickSignIn(){ 
        await this.hover("accountandLists");     // know to perform hover action await page.locator
        await this.click("yourAccount");  // click on sign in button
    }

    async searchProduct(productName: string)
    {
        await this.Type("searchBox", productName);

        await this.click("searchButton");
    }

    

}
