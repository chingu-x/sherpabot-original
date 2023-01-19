const Message = require('../src/util/Message')
const askCommand = require('../src/askCommand')
const docCommand = require('../src/docCommand')
const helpCommand = require('../src/helpCommand')
const issueCommand = require('../src/issueCommand')
const scheduleCommand = require('../src/scheduleCommand')
const socialCommand = require('../src/socialCommand')
const timeCommand = require('../src/timeCommand')

describe('000.00/Test the Sherpa Discord bot', () => {

  const commandPrefix = 'test!'
  let msg

  beforeAll(() => {
    msg = new Message()
  })

  test('100.01/Validate the ask command', async () => {
    askCommand.process(msg, commandPrefix, 'badcmd', [])
    expect(msg.getLastReply().indexOf('Sherpabot error'))
      .toBeGreaterThan(-1)

    askCommand.process(msg, commandPrefix, 'ask', [])
    expect(msg.getLastReply())
      .toMatch('https://chingu.docs.chingu.io/about/askhelp')

    expect(typeof askCommand.help()).toMatch('string')
  })

  test('200.01/Validate the doc command', async () => {
    docCommand.process(msg, commandPrefix, 'badcmd', [])
    expect(msg.getLastReply().indexOf('Sherpabot error'))
      .toBeGreaterThan(-1)

    docCommand.process(msg, commandPrefix, 'doc', ['badarg'])
    expect(msg.getLastReply().indexOf('I\'m sorry'))
      .toBeGreaterThan(-1)

    docCommand.process(msg, commandPrefix, 'doc', [])
    expect(msg.getLastReply())
      .toMatch('https://docs.chingu.io')
    
    docCommand.process(msg, commandPrefix, 'doc', ['chingu'])
    expect(msg.getLastReply())
      .toMatch('https://chingu.docs.chingu.io')

    docCommand.process(msg, commandPrefix, 'doc', ['pair'])
    expect(msg.getLastReply())
      .toMatch('https://pairprog.docs.chingu.io')

    docCommand.process(msg, commandPrefix, 'doc', ['proj'])
    expect(msg.getLastReply())
      .toMatch('https://projres.docs.chingu.io')
    
    docCommand.process(msg, commandPrefix, 'doc', ['tech'])
    expect(msg.getLastReply())
      .toMatch('https://techres.docs.chingu.io')

    docCommand.process(msg, commandPrefix, 'doc', ['voyage'])
    expect(msg.getLastReply())
      .toMatch('https://voyage.docs.chingu.io')

    expect(typeof docCommand.help()).toMatch('string')
  })

  test('300.01/Validate the help command', async () => {
    helpCommand.process(msg, commandPrefix, 'badcmd', [])
    expect(msg.getLastReply().indexOf('Sherpabot error'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['badarg'])
    expect(msg.getLastReply().indexOf('I\'m sorry'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', [])
    expect(msg.getLastReply().indexOf(' __**Sherpa Commands:**__ '))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['ask'])
    expect(msg.getLastReply().indexOf('**Sherpa ask Commands:**'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['doc'])
    expect(msg.getLastReply().indexOf('**Sherpa doc Commands:**'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['issue'])
    expect(msg.getLastReply().indexOf('**Sherpa issue Commands:**'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['sched'])
    expect(msg.getLastReply().indexOf('**Sherpa schedule Commands:**'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['schedule'])
    expect(msg.getLastReply().indexOf('**Sherpa schedule Commands:**'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['social'])
    expect(msg.getLastReply().indexOf('**Sherpa social Commands:**'))
      .toBeGreaterThan(-1)

    helpCommand.process(msg, commandPrefix, 'help', ['time'])
    expect(msg.getLastReply().indexOf('**Sherpa time Commands:**'))
      .toBeGreaterThan(-1)

    expect(typeof helpCommand.help()).toMatch('string')
  })

  test('400.01/Validate the issue command', async () => {
    issueCommand.process(msg, commandPrefix, 'badcmd', [])
    expect(msg.getLastReply().indexOf('Sherpabot error'))
      .toBeGreaterThan(-1)

    issueCommand.process(msg, commandPrefix, 'issue', [])
    expect(msg.getLastReply())
      .toMatch('https://chingu.docs.chingu.io/about/rptissue')

    expect(typeof issueCommand.help()).toMatch('string')
  })

  test('500.01/Validate the sched|schedule commands', async () => {
    scheduleCommand.process(msg, commandPrefix, 'badcmd', [])
    expect(msg.getLastReply().indexOf('Sherpabot error'))
      .toBeGreaterThan(-1)

    scheduleCommand.process(msg, commandPrefix, 'sched', [])
    expect(msg.getLastReply())
      .toMatch('https://chingu.docs.chingu.io/intro/schedule')

    scheduleCommand.process(msg, commandPrefix, 'schedule', [])
    expect(msg.getLastReply())
      .toMatch('https://chingu.docs.chingu.io/intro/schedule')

    expect(typeof scheduleCommand.help()).toMatch('string')
  })

  test('600.01/Validate the social command', async () => {
    socialCommand.process(msg, commandPrefix, 'badcmd', [])
    expect(msg.getLastReply().indexOf('Sherpabot error'))
      .toBeGreaterThan(-1)

    socialCommand.process(msg, commandPrefix, 'social', [])
    expect(msg.getLastReply())
      .toMatch('Twitter --> https://twitter.com/ChinguCollabs\\')

    expect(typeof socialCommand.help()).toMatch('string')
  })

  test('700.01/Validate the time command', async () => {
    timeCommand.process(msg, commandPrefix, 'badcmd', [])
    expect(msg.getLastReply().indexOf('Sherpabot error'))
      .toBeGreaterThan(-1)

    timeCommand.process(msg, commandPrefix, 'time', ['badarg'])
    expect(msg.getLastReply().indexOf('I\'m sorry'))
      .toBeGreaterThan(-1)

    timeCommand.process(msg, commandPrefix, 'time', ['in', 'BadCityName'])
    expect(msg.getLastReply().indexOf('In BadCityName'))
      .toEqual(-1)

    timeCommand.process(msg, commandPrefix, 'time', ['in', 'Chicago'])
    expect(msg.getLastReply().indexOf('In Chicago'))
      .toBeGreaterThan(-1)

    timeCommand.process(msg, commandPrefix, 'time', ['in', 'Springfield'])
    expect(msg.getLastReply().indexOf('In Springfield,'))
      .toBeGreaterThan(-1)

    expect(typeof timeCommand.help()).toMatch('string')
  })

})