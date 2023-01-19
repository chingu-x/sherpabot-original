const askCommand = require('./askCommand')
const docCommand = require('./docCommand')
const issueCommand = require('./issueCommand')
const scheduleCommand = require('./scheduleCommand')
const socialCommand = require('./socialCommand')
const timeCommand = require('./timeCommand')

class helpCommand {
  /**
   * Process a Sherpabot help command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   */
  static async process(msg, commandPrefix, command, args) {

    const helpCmdArgs = [
      { argument: '', reply: helpCommand.help }, 
      { argument: 'ask', reply: askCommand.help }, 
      { argument: 'doc', reply: docCommand.help },
      { argument: 'issue', reply: issueCommand.help },
      { argument: 'sched', reply: scheduleCommand.help },
      { argument: 'schedule', reply: scheduleCommand.help },
      { argument: 'social', reply: socialCommand.help },
      { argument: 'time', reply: timeCommand.help },
    ]

    if (command !== '' && command !== 'help') {
      msg.reply(`Sherpabot error: Help command routing error (command=${command}). \
  Please report this to a Chingu administrator.`)
      console.log(`Sherpabot error: Help command routing error (command=${command})`)
      return
    }

    let commandArg = args[0]
    if ( commandArg === undefined) {
      commandArg = ''
    }

    for(let i = 0; i < helpCmdArgs.length; i++) {
      if (helpCmdArgs[i].argument === commandArg) {
        msg.reply(helpCmdArgs[i].reply(commandPrefix))
        return
      }
    }

    msg.reply(`I'm sorry, but I don't understand \`${commandArg}\`. Use \
    \`${commandPrefix}help\` to see a list of valid commands.`)

  }

  /**
   * Retrieve a string containing help information for the 'help`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof askcmds
   */
  static help(commandPrefix) {
    return ` __**Sherpa Commands:**__ \
\n\`${commandPrefix}    \` - List Sherpa commands \
\n\`${commandPrefix}help\` - List Sherpa commands \
\n\`${commandPrefix}help ask\` - Access tips on how to ask for help \
\n\`${commandPrefix}help doc\` - Access the Chingu Handbook \
\n\`${commandPrefix}help issue\` - How to open an issue for the Chingu team \
\n\`${commandPrefix}help sched|schedule\` - Access the Chingu Schedule of Events \
\n\`${commandPrefix}help social\` - Display URLs for Chingu social media sites \
\n\`${commandPrefix}help time\` - Display the time \
      `
  }
}

module.exports = helpCommand