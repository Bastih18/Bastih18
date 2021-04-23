const discordApi = "https://discord.com/api"
export const guild = {
    getGuild: discordApi+"/guilds/{guild.id}",
    getGuildPreview: discordApi+"/guilds/{guild.id}/preview",
    getGuildMember: discordApi+"/guilds/{guild.id}/members/{user.id}",
    getGuildChannels: discordApi+"/guilds/{guild.id}/channels",
    getGuildMembers: discordApi+"/guilds/{guild.id}/members",
    getGuildBan: discordApi+"/guilds/{guild.id}/bans/{user.id}",
    getGuildBans: discordApi+"/guilds/{guild.id}/bans",
    getGuildRoles: discordApi+"/guilds/{guild.id}/roles",
    getGuildVoiceRegions: discordApi+"/guilds/{guild.id}/regions",
    getGuildInvites: discordApi+"/guilds/{guild.id}/invites",

    addGuildMemberRole: discordApi+"/guilds/{guild.id}/members/{user.id}/roles/{role.id}",

    createGuildChannel: discordApi+"/guilds/{guild.id}/channels",
    createGuildBan: discordApi+"/guilds/{guild.id}/bans/{user.id}",
    createGuildRole: discordApi+"/guilds/{guild.id}/roles",
    
    modifyGuild: discordApi+"/guilds/{guild.id}",
    modifyGuildChannelPositions: discordApi+"/guilds/{guild.id}/channels",
    modifyGuildMember: discordApi+"/guilds/{guild.id}/members/{user.id}",
    modifyGuildRolePositions: discordApi+"/guilds/{guild.id}/roles",
    modifyGuildRole: discordApi+"/guilds/{guild.id}/roles/{role.id}",

    removeGuildBan: discordApi+"/guilds/{guild.id}/bans/{user.id}",
    removeGuildMemberRole: discordApi+"/guilds/{guild.id}/members/{user.id}/roles/{role.id}",
    removeGuildMember: discordApi+"/guilds/{guild.id}/members/{user.id}",
    deleteGuildRole: discordApi+"/guilds/{guild.id}/roles/{role.id}",
}