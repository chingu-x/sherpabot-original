/**
 * Mock class used in Jest tests to replace the Discord Message
 * Class
 * @class Message
 */
class Message {
  constructor() {
    this.lastReply = ''
  }

  // Retrieve the last reply
  getLastReply() {
    return this.lastReply
  }

  // Mock the Discord message object reply function
  reply(messageText) {
    console.log(messageText)
    this.lastReply = messageText
  }
}

module.exports = Message