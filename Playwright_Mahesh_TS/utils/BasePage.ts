import {Page} from "@playwright/test";
import{JsonHelper} from "./JsonHelper";


export class BasePage
{
    public page: Page;
    public locators: any;

    constructor(page: Page , pageName: string)
    {
        this.page = page;
        const allLocators = JsonHelper.loadLocator();
        this.locators = allLocators[pageName]; //2

        
    }

    async click(LocatorKey: string)
    {
      await this.page.click(this.locators[LocatorKey]);
     
    }

    async Type(LocatorKey: string, text: string)
    {
        await this.page.fill(this.locators[LocatorKey], text);
    }

    async getText(LocatorKey: string)
    {
        const locator = this.page.locator(this.locators[LocatorKey]).first();
        await locator.waitFor({ state: "visible", timeout: 15000 });
        return await locator.textContent();
    }

    async selectDropDown(LocatorKey: string, categoryName: string)
    {
        await this.page.locator(this.locators[LocatorKey]).selectOption({ label: categoryName });
    
    }


    async hover(LocatorKey: string)
    {
        await this.page.hover(this.locators[LocatorKey]);
    }
     













}
