class scheduleCommand {
  /**
   * Process a Sherpabot schedule command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== 'schedule' && command !== 'sched') {
      msg.reply(`Sherpabot error: Schedule command routing error \`(command=${command})\`. \
  Please report this to a Chingu administrator.`)
      console.log(`Sherpabot error: Issue command routing error (command=${command})`)
      return
    }

    msg.reply('https://chingu.docs.chingu.io/intro/schedule')
  }

  /**
   * Retrieve a string containing help information for the 'schedule`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof askcmds
   */
  static help(commandPrefix) {
    return ` __**Sherpa schedule Commands:**__ \
\n\`${commandPrefix}issue\` - How to open an issue for the Chingu team \
      `
  }

}

module.exports = scheduleCommand