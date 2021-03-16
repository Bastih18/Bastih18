import {Application} from "express";
import {getGuild, getGuildMember, getGuildChannels, getGuildMembers, getGuildPreview} from '../controller/guild.controller';

/**
 * 
 * Guild express URLS
 * @param baseUrl
 * @param app
 * 
 */

export default (baseUrl: string, app: Application) =>{
    app.get(`${baseUrl}/:guildid`, getGuild);
    app.get(`${baseUrl}/:guildid/preview`, getGuildPreview);
    app.get(`${baseUrl}/:guildid/members/:userid`, getGuildMember)
    app.get(`${baseUrl}/:guildid/channels`, getGuildChannels)
    app.get(`${baseUrl}/:guildid/members`, getGuildMembers)
}