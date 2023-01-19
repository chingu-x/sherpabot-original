
class askCommand {
  /**
   * Process a Sherpabot ask command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== 'ask') {
      msg.reply(`Sherpabot error: Ask command routing error \`(command=${command})\`. \
Please report this to a Chingu administrator.`)
      console.log(`Sherpabot error: Ask command routing error (command=${command})`)
      return
    }

    msg.reply('https://chingu.docs.chingu.io/about/askhelp')
  }

  /**
   * Retrieve a string containing help information for the 'ask`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof askcmds
   */
  static help(commandPrefix) {
    return ` __**Sherpa ask Commands:**__ \
\n\`${commandPrefix}ask\` - Display tips on how to ask for help`
  }
}

module.exports = askCommand