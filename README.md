# inquirer-test

[![Build Status](https://travis-ci.org/ewnd9/inquirer-test.svg?branch=master)](https://travis-ci.org/ewnd9/inquirer-test)

Functional testing for [inquirer.js](http://npmjs.com/package/inquirer)

> Could be use to test output of commands with regexs or side effects from running a script.
>
> E.g. with project generators you provide a combinations of control keys and text inputs and ensure
> that files are generated with `fs` or other modules.

## Install

```
$ npm install inquirer-test --save-dev
```

## Usage

```js
// cli.js

const inquirer = require('inquirer');
const outputs = ['TEST-1', 'TEST-2', 'TEST-3'];

inquirer.prompt({
  type: 'list',
  name: 'q',
  message: 'hi',
  choices: [ '1', '2', '3' ]
}).then(function(answers) {
  console.log(outputs[+answers.q - 1]);
});
```

```js
// test.js

import test from 'ava';
import run, { UP, DOWN, ENTER } from 'inquirer-test';

const cliPath = __dirname + '/cli.js';

test('press enter', async t => {
  const result = await run([cliPath], [ENTER]);
  t.regex(result, new RegExp('TEST-1', 'g'));
});

test('press down, press enter', async t => {
  const result = await run([cliPath], [DOWN, ENTER]);
  t.regex(result, new RegExp('TEST-2', 'g'));
});

test('press up, press enter', async t => {
  const result = await run([cliPath], [UP, ENTER]);
  t.regex(result, new RegExp('TEST-3', 'g'));
});

test('press press up, press down, press enter', async t => {
  const result = await run([cliPath], [UP, DOWN, ENTER]);
  t.regex(result, new RegExp('TEST-1', 'g'));
});

test('run with data input', async t => {
  const result = await run([cliPath], ['input-1', ENTER, 'input-2', ENTER]);
  t.regex(result, new RegExp("username: 'input-1', password: 'input-2'", 'g'));
});
```

## Changelog

- `v2.0.0`
  - change cliPath to `child_process` arguments array
  - update to `inquirer@4`

## Related

- [inquirer](https://github.com/sboudrias/Inquirer.js)
- [inquirer-bluebird](https://github.com/ewnd9/inquirer-bluebird)
- [inquirer-question](https://github.com/ewnd9/inquirer-question)
- [inquirer-credentials](https://github.com/ewnd9/inquirer-credentials)
- [inquirer-menu](https://github.com/ewnd9/inquirer-menu)

## License

MIT © [ewnd9](http://ewnd9.com)
