const CommandsNonPriorityEnum = require('../constants/CommandsNonPriorityEnum')
const CommandsPriorityEnum = require('../constants/CommandsPriorityEnum')


const filter = require('./filter')
const count = require('./count')
const help = require('./help')

const commands = {
  [CommandsPriorityEnum.FILTER]: filter,
  [CommandsNonPriorityEnum.COUNT]: count,
  [CommandsNonPriorityEnum.HELP]: help
};

module.exports = commands