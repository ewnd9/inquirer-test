# inquirer-test

[![Build Status](https://travis-ci.org/ewnd9/inquirer-test.svg?branch=master)](https://travis-ci.org/ewnd9/inquirer-test)

Functional testing for [inquirer.js](http://npmjs.com/package/inquirer)

## Install

```
$ npm install inquirer-test --save-dev
```

## Usage

```js
// cli.js

var inquirer = require('inquirer');
var outputs = ['TEST-1', 'TEST-2', 'TEST-3'];

inquirer.prompt({
  type: 'list',
  name: 'q',
  message: 'hi',
  choices: [ '1', '2', '3' ]
}, function(answers) {
  console.log(outputs[+answers.q - 1]);
});
```

```js
// test.js

import test from 'ava';
import run, { UP, DOWN, ENTER } from 'inquirer-test';

const cliPath = __dirname + '/cli.js';

test('press enter', async t => {
  const result = await(run(cliPath, [ENTER]));
  t.regexTest(new RegExp('TEST-1', 'g'), result);
});

test('press down, press enter', async t => {
  const result = await(run(cliPath, [DOWN, ENTER]));
  t.regexTest(new RegExp('TEST-2', 'g'), result);
});

test('press up, press enter', async t => {
  const result = await(run(cliPath, [UP, ENTER]));
  t.regexTest(new RegExp('TEST-3', 'g'), result);
});

test('press press up, press down, press enter', async t => {
  const result = await(run(cliPath, [UP, DOWN, ENTER]));
  t.regexTest(new RegExp('TEST-1', 'g'), result);
});
```

## License

MIT © [ewnd9](http://ewnd9.com)
