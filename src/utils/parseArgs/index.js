const commands = require("../../commands");

const CommandsNonPriorityEnum = require("../../constants/CommandsNonPriorityEnum")
const CommandsPriorityEnum = require('../../constants/CommandsPriorityEnum')


function parseArgs(args) {
  const commandArgs = {
    prioritized: {},
    others: {}
  };

  args.forEach(arg => {
    const [command, value] = arg.split('=');
    if (Object.values(CommandsPriorityEnum).includes(command)) {
      
      if(typeof value !== 'string' || value.trim() === ''){
        console.error(`Invalid value for the command: ${command}`);
        process.exit()
      }
      commandArgs.prioritized[command] = value;
    } else if (Object.values(CommandsNonPriorityEnum).includes(command)) {
      commandArgs.others[command] = value;
    } else {
      console.error(`Unknown command: ${command}`);
      process.exit()
    }
  });

  return commandArgs;
}

module.exports = parseArgs;