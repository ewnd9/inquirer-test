'use strict';

describe('inquire-test', function() {
  const run = require('..');
  const { UP, DOWN, ENTER } = run;

  const cliPath = `${__dirname}/fixtures/cli.js`;

  test('press enter', async () => {
    const result = await run([cliPath], [ENTER]);
    expect(result).toMatch(new RegExp('TEST-1', 'g'));
  });

  test('press down, press enter', async () => {
    const result = await run([cliPath], [DOWN, ENTER]);
    expect(result).toMatch(new RegExp('TEST-2', 'g'));
  });

  test('press up, press enter', async () => {
    const result = await run([cliPath], [UP, ENTER]);
    expect(result).toMatch(new RegExp('TEST-3', 'g'));
  });
  
  test('press up, press down, press enter', async () => {
    const result = await run([cliPath], [UP, DOWN, ENTER]);
    expect(result).toMatch(new RegExp('TEST-1', 'g'));
  });
});


