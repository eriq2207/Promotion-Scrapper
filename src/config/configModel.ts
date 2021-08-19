import fs from 'fs'

export const cfgPath: string = __dirname + '/config.json'

export enum BotTypes { 
    'GAG' = 'GAG', 
    'Steam' = 'Steam' 
}

export interface ConfigTemplate {
    botUrl: string;
    botType: BotTypes;
    pollTime: number;
}