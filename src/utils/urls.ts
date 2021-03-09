const discordApi = "https://discord.com/api"
export const guild = {
    getGuild: discordApi+"/guilds/{guild.id}",
    getGuildPreview: discordApi+"/guilds/{guild.id}/preview",
    getGuildChannels: discordApi+"/guilds/{guild.id}/channels"   
}