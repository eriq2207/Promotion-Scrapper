import { BaseScrapper } from "./base";

export class SteamScrapper extends BaseScrapper {
    constructor() {
        super()
    }
    async startScrapping() {
        await this.startBrowser();
        await this.executeJS('console.log("HEHE")');
    }
}