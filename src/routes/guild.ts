import {Application} from "express";
import {getGuild, getGuildMember, getGuildChannels, getGuildMembers, getGuildPreview, removeGuildMember, removeGuildMemberRole} from '../controller/guild.controller';

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
    app.get(`${baseUrl}/guilds/:guildid/bans/:userid`)
    app.delete(`${baseUrl}/:guildid/members/:userid/roles/:roleid`, removeGuildMemberRole)
    app.delete(`${baseUrl}/:guildid/members/:userid`, removeGuildMember)
}