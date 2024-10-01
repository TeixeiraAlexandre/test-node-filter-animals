
const runApp = require('./src/runApp')

function handleArgumentsAndRun(args) {
  if (args.length === 0) {
    console.log("Please provide a valid option. To see the valid options, run the --help option.");
    return;
  }

  const result = runApp(args);
  console.log(JSON.stringify(result, null, 2));
}

handleArgumentsAndRun(process.argv.slice(2));