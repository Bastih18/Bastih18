const discordApi = "https://discord.com/api"
export const guild = {
    getGuild: discordApi+"/guilds/{guild.id}",
    getGuildPreview: discordApi+"/guilds/{guild.id}/preview",
    getGuildMember: discordApi+"/guilds/{guild.id}/members/{user.id}",
    getGuildChannels: discordApi+"/guilds/{guild.id}/channels",
    getGuildMembers: discordApi+"/guilds/{guild.id}/members",
    getGuildBan: discordApi+"/guilds/{guild.id}/bans/{user.id}",
    getGuildBans: discordApi+"/guilds/{guild.id}/bans",
    addGuildMemberRole: discordApi+"/guilds/{guild.id}/members/{user.id}/roles/{role.id}",
    removeGuildMemberRole: discordApi+"/guilds/{guild.id}/members/{user.id}/roles/{role.id}",
    removeGuildMember: discordApi+"/guilds/{guild.id}/members/{user.id}"
}