function help() {
  console.log(`
    Usage: node app.js [options]
    
    Options:
      --filter=<pattern>   Filter animals by the given pattern.
      --count              Display the count of people and animals.
      --help               Display this help message.
  `);
  process.exit()
}

module.exports = help