
const docCmdArgs = [
  { argument: 'chingu', reply: 'https://chingu.docs.chingu.io' },
  { argument: 'pair', reply: 'https://pairprog.docs.chingu.io' },
  { argument: 'proj', reply: 'https://projres.docs.chingu.io' },
  { argument: 'tech', reply: 'https://techres.docs.chingu.io' },
  { argument: 'voyage', reply: 'https://voyage.docs.chingu.io' },
]

class docCommand {

  /**
   * Process a Sherpabot doc command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== 'doc') {
      msg.reply(`Sherpabot error: Doc command routing error (command=${command}). \
  Please report this to a Chingu administrator.`)
      console.log(`Sherpabot error: Doc command routing error (command=${command})`)
      return
    }

    if (args.length === 0) {
      msg.reply('https://docs.chingu.io')
    } else {
      for(let i = 0; i < docCmdArgs.length; i++) {
        if (docCmdArgs[i].argument === args[0]) {
          msg.reply(docCmdArgs[i].reply)
          return
        }
      }
      
      msg.reply(`I'm sorry, but I don't understand \`${args[0]}\`. Use \
  \`${commandPrefix}help doc\` to see a list of valid commands.`)

    }
  }

  /**
   * Retrieve a string containing help information for the 'doc`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof askcmds
   */
  static help(commandPrefix) {
    return ` __**Sherpa doc Commands:**__ \
\n\`${commandPrefix}doc chingu\` - Access info about the Chingu organization \
\n\`${commandPrefix}doc voyage\` - Access info about your Voyage  \
\n\`${commandPrefix}doc pair\`   - Access info about Pair Programming sessions \
\n\`${commandPrefix}doc tech\`   - Access Technical Resources \
\n\`${commandPrefix}doc proj\`   - Access Project Resources \
      `
  }


}

module.exports = docCommand