import {Application} from "express";
import {getGuild, getGuildChannels, getGuildPreview} from '../controller/guild.controller';

/**
 * 
 * Guild express URLS
 * @param baseUrl
 * @param app
 * 
 */

export default (baseUrl: string, app: Application) =>{
    app.get(`${baseUrl}/:id`, getGuild);
    app.get(`${baseUrl}/:id/preview`, getGuildPreview);
    app.get(`${baseUrl}/:id/channels`, getGuildChannels)
}