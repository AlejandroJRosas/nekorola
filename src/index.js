import { Client, Events, GatewayIntentBits, Collection } from 'discord.js'
import { BOT_TOKEN } from './config.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection()

client.commands.set('ping')

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

client.login(BOT_TOKEN)
