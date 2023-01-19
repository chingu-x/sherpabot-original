const Discord = require('discord.js')
const askCommand = require('./askCommand')
const docCommand = require('./docCommand')
const helpCommand = require('./helpCommand')
const issueCommand = require('./issueCommand')
const scheduleCommand = require('./scheduleCommand')
const socialCommand = require('./socialCommand')
const timeCommand = require('./timeCommand')

const commandList = [
  { command: '', func: helpCommand.process },
  { command: 'ask', func: askCommand.process },
  { command: 'doc', func: docCommand.process },
  { command: 'help', func: helpCommand.process },
  { command: 'issue', func: issueCommand.process },
  { command: 'sched', func: scheduleCommand.process },
  { command: 'schedule', func: scheduleCommand.process },
  { command: 'social', func: socialCommand.process },
  { command: 'time', func: timeCommand.process },
]

async function sherpabot() {
  const client = new Discord.Client({ intents: Discord.IntentsBitField.Flags.GuildMessages })

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })

  client.on('message', async msg => {
    if(msg.author.bot) {
      return
    }

    // Ignore messages that don't start with our prefix
    const commandPrefix = process.env.COMMAND_PREFIX
    if(msg.content.toLowerCase().indexOf(commandPrefix) !== 0) {
      return
    }
    
    // Separate command from its arguments
    const args = msg.content.slice(commandPrefix.length).trim().toLowerCase().split(/ +/g)
    const command = args.shift().toLowerCase()

    // Validate and process commands
    const commandFunction = commandList.reduce((commandFunction, currentEntry) => {
      if (currentEntry.command === command) {
        return commandFunction = currentEntry.func
      }
      return commandFunction
    }, null)

    if (commandFunction !== null) {
      commandFunction(msg, commandPrefix, command, args)
    } else {
      msg.reply('You have entered and invalid command. Try `sherpa!` if you \
want to see a list of available commands.')
    }
  })

  await client.login(process.env.DISCORD_TOKEN)
}

module.exports = sherpabot