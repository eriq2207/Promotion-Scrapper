import puppeteer from 'puppeteer'
import { ConfigTemplate, cfgPath } from '../../config/configModel'

const cfg: ConfigTemplate = require(cfgPath)

export abstract class BaseScrapper {
    constructor() {
        console.log("Launching " + cfg.botType + " bot with URL -> " + cfg.botUrl)
    }
    protected browser: puppeteer.Browser;
    protected page: puppeteer.Page;

    protected async startBrowser() {
        console.log("Launching web browser..")
        this.browser = await puppeteer.launch({
            headless : false
        });
        this.page = await this.browser.newPage();
        return await this.page.goto(cfg.botUrl, {
            waitUntil: 'networkidle2',
        });
    }
    protected async refreshPage(){
        console.log("Refreshing web browser..")
        return await this.page.reload()
    }
    protected async closeBrowser() {
        console.log("Closing web browser..")
        await this.browser.close()
    }
    protected async executeJS(pageFn: any) {
        console.log("Invoking JS function: " + pageFn)
        return await this.page.evaluate(pageFn) 
    }
}