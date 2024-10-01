const data = require('./data/data')
const commands = require('./commands')
const parseArgs = require('./utils/parseArgs')

function runApp(args) {
  let processedData = [...data.data];
  const commandArgs = parseArgs(args);

  for (const command in commandArgs.prioritized) {
    if (commands[command]) {
      processedData = commands[command](commandArgs.prioritized[command], processedData);
    }
  }

  for (const command in commandArgs.others) {
    if (commands[command]) {
      processedData = commands[command](commandArgs.others[command], processedData);
    }
  }

  return processedData;
}

module.exports = runApp