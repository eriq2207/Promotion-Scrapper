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
        this.browser = await puppeteer.launch({
            headless : false
        });
        this.page = await this.browser.newPage();
        return await this.page.goto(cfg.botUrl, {
            waitUntil: 'networkidle2',
        });
    }
    protected async refreshPage(){
        return await this.page.reload()
    }
    protected async closeBrowser() {
        await this.browser.close()
    }
    protected async executeJS(pageFn: any) {
        return await this.page.evaluate(pageFn) 
    }
}