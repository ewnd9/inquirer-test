var inquirer = require('inquirer');
var outputs = ['TEST-1', 'TEST-2', 'TEST-3'];

inquirer.prompt({
  type: 'list',
  name: 'q',
  message: 'hi',
  choices: [ '1', '2', '3' ]
}).then(function(answers) {
  console.log(outputs[+answers.q - 1]);
});
