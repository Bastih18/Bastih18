const discordApi = "https://discord.com/api"
export const guild = {
    getGuild: discordApi+"/guilds/{guild.id}",
    getGuildPreview: discordApi+"/guilds/{guild.id}/preview",
    getGuildMember: discordApi+"/guilds/{guild.id}/members/{user.id}",
    getGuildMembers: discordApi+"/guilds/{guild.id}/members",
}