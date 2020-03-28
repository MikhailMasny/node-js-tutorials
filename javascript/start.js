const chalk = require('chalk');
const text = require('./data')

console.log("Hello NodeJS");
console.log(chalk.blue("Blue color"));
console.log(chalk.red(text));

console.log(__dirname);
console.log(__filename);
