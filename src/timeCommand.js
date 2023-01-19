var cityTimezones = require('city-timezones')

class timeCommand {
  /**
   * Interpret and process a Sherpabot time command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== 'time') {
      msg.reply(`Sherpabot error: Time command routing error \`(command=${command})\`. \
  Please report this to a Chingu administrator.`)
      console.log(`Sherpabot error: Time command routing error (command=${command})`)
      return
    }

    if (args[0] === 'in') {
      // Locate the matching cities
      const cityName = args.reduce((cityName, currentArg, currentIndex)=> {
        if (currentIndex !== 0) {
          return cityName + ' ' + currentArg
        }
        return cityName
      }, '').trim()
      const cities = cityTimezones.lookupViaCity(cityName)

      // Customize the message based on whether there were no matches, a single 
      // match, or multiple matching cities.
      let date = new Date()
      let options = {
        timeStyle: 'long',
      }

      if (cities.length <= 0) {
        msg.reply(`The location ${cityName} wasn't found!`)
        return
      } else if (cities.length === 1) {
        options.timeZone = cities[0].timezone
        msg.reply(`In ${cities[0].city} it is currently ${date.toLocaleTimeString('en-US', options)}`)
        return
      } else if (cities.length > 1) {
        msg.reply(`${cities.length} locations were found.`)
        cities.forEach(city => {
          options.timeZone = city.timezone
          const state = city.state_ansi !== undefined ? city.state_ansi : ''
          msg.reply(`In ${city.city}, ${state} ${city.country}  it is currently ${date.toLocaleTimeString('en-US', options)}`)
        })
        return
      }
    } 

    msg.reply(`I'm sorry, but I don't understand \`${args[0]}\`. Use \
  \`${commandPrefix}help time\` to see a list of valid commands.`)
  }

  /**
   * Retrieve a string containing help information for the 'issue`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof askcmds
   */
  static help(commandPrefix) {
    return ` __**Sherpa time Commands:**__ \
\n\`${commandPrefix}time in <city-name>\` - Display current time in the specified city \
      `
  }

}

module.exports = timeCommand