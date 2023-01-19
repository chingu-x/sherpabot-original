class socialCommand {
/**
   * Interpret and process a Sherpabot social command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   * @memberof socialCommand
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== 'social') {
      msg.reply(`Sherpabot error: Social command routing error \`(command=${command})\`. \
Please report this to a Chingu administrator.`)
      console.log(`Sherpabot error: Social command routing error (command=${command})`)
      return
    }

    msg.reply('Dev.to --> https://dev.to/chingu\\')
    msg.reply('Medium --> https://medium.com/chingu\\')
    msg.reply('Twitter --> https://twitter.com/ChinguCollabs\\')

  }

  /**
   * Retrieve a string containing help information for the 'social`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof socialCommand
   */
  static help(commandPrefix) {
    return ` __**Sherpa social Commands:**__ \
\n\`${commandPrefix}social\` - Display URL's for Chingu social media sites \
      ` 
  }
}

module.exports = socialCommand