import {Application} from "express";
import {getGuild, getGuildMember, getGuildChannels, getGuildMembers, getGuildPreview, removeGuildMember, removeGuildMemberRole, getGuildBan, getGuildBans, addGuildMemberRole, modifyGuildMember, createGuildBan, removeGuildBan, getGuildRoles, modifyGuild, createGuildChannel, modifyGuildChannelPositions, createGuildRole, modifyGuildRolePositions, modifyGuildRole, deleteGuildRole, getGuildVoiceRegions, getGuildInvites} from '../controller/guild.controller';

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
    app.get(`${baseUrl}/:guildid/bans/:userid`, getGuildBan)
    app.get(`${baseUrl}/:guildid/bans`, getGuildBans)
    app.get(`${baseUrl}/:guildid/roles`, getGuildRoles)
    app.get(`${baseUrl}/:guildid/regions`, getGuildVoiceRegions)
    app.get(`${baseUrl}/:guildid/invites`, getGuildInvites)

    app.post(`${baseUrl}/:guildid/channels`, createGuildChannel)    
    app.post(`${baseUrl}/:guildid/roles`, createGuildRole)

    app.put(`${baseUrl}/:guildid/members/:userid/roles/:roleid`, addGuildMemberRole)
    app.put(`${baseUrl}/:guildid/bans/:userid`, createGuildBan)

    app.patch(`${baseUrl}/:guildid`, modifyGuild)
    app.patch(`${baseUrl}/:guildid/channels`, modifyGuildChannelPositions)
    app.patch(`${baseUrl}/:guildid/members/:userid`, modifyGuildMember)
    app.patch(`${baseUrl}/:guildid/roles`, modifyGuildRolePositions)
    app.patch(`${baseUrl}/:guildid/roles/:roleid`, modifyGuildRole)

    app.delete(`${baseUrl}/:guildid/members/:userid/roles/:roleid`, removeGuildMemberRole)
    app.delete(`${baseUrl}/:guildid/members/:userid`, removeGuildMember)
    app.delete(`${baseUrl}/:guildid/bans/:userid`, removeGuildBan)
    app.delete(`${baseUrl}/:guildid/roles/:roleid`, deleteGuildRole)
}