import  {ConfigTemplate, BotTypes, cfgPath} from './config/configModel'
import * as Scrappers from './scrapper/controllers/scrappersCollector' ;

const cfg : ConfigTemplate = require(cfgPath)
let scrapper;

switch (cfg.botType) {
    case BotTypes.GAG:
        scrapper = new Scrappers.GagScrapper();
        break;
    case BotTypes.Steam:
        scrapper = new Scrappers.SteamScrapper();
        scrapper.startScrapping()
        break;
}
