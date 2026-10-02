import * as fs from 'fs';

export class JsonHelper
{
    static loadLocator() : any
    {
        return JSON.parse(fs.readFileSync('./locators/locator.json', 'utf-8'));
    }

     static loadData() : any
    {
        return JSON.parse(fs.readFileSync('./data/testData.json', 'utf-8'));
    }
}