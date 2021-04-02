import {Application} from "express";
import {getGuild, getGuildMember, getGuildChannels, getGuildMembers, getGuildPreview, removeGuildMember, removeGuildMemberRole, getGuildBan, getGuildBans, addGuildMemberRole, modifyGuildMember, createGuildBan, removeGuildBan} from '../controller/guild.controller';

/**
 * 
 * Guild express URLS
 * @param baseUrl
 * @param app
 * 
 */

export default (baseUrl: string, app: Application) =>{
    app.get(`${baseUrl}/guilds/:guildid`, getGuild);
    app.get(`${baseUrl}/guilds/:guildid/preview`, getGuildPreview);
    app.get(`${baseUrl}/guilds/:guildid/members/:userid`, getGuildMember)
    app.get(`${baseUrl}/guilds/:guildid/channels`, getGuildChannels)
    app.get(`${baseUrl}/guilds/:guildid/members`, getGuildMembers)
    app.get(`${baseUrl}/guilds/:guildid/bans/:userid`, getGuildBan)
    app.get(`${baseUrl}/guilds/:guildid/bans`, getGuildBans)
    app.put(`${baseUrl}/guilds/{guild.id}/members/{user.id}/roles/{role.id}`, addGuildMemberRole)
    app.put(`${baseUrl}//guilds/{guild.id}/bans/{user.id}`, createGuildBan)
    app.patch(`${baseUrl}/guilds/{guild.id}/members/{user.id}`, modifyGuildMember)
    app.delete(`${baseUrl}/:guildid/members/:userid/roles/:roleid`, removeGuildMemberRole)
    app.delete(`${baseUrl}/:guildid/members/:userid`, removeGuildMember)
    app.delete(`${baseUrl}/guilds/{guild.id}/bans/{user.id}`, removeGuildBan)
}