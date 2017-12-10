'use strict';

const { expect } = require('chai');

describe('inquire-test', function() {
  const run = require('../');
  const { UP, DOWN, ENTER } = run;

  const cliPath = `${__dirname}/fixtures/cli.js`;

  it('press enter', done => {
    run([cliPath], [ENTER])
      .then(result => {
        expect(result).to.match(new RegExp('TEST-1', 'g'));
        done();
      })
      .catch(err => done(err));
  });

  it('press down, press enter', done => {
    run([cliPath], [DOWN, ENTER])
      .then(result => {
        expect(result).to.match(new RegExp('TEST-2', 'g'));
        done();
      })
      .catch(err => done(err));
  });

  it('press up, press enter', done => {
    run([cliPath], [UP, ENTER])
      .then(result => {
        expect(result).to.match(new RegExp('TEST-3', 'g'));
        done();
      })
      .catch(err => done(err));
  });

  it('press up, press down, press enter', done => {
    run([cliPath], [UP, DOWN, ENTER])
      .then(result => {
        expect(result).to.match(new RegExp('TEST-1', 'g'));
        done();
      })
      .catch(err => done(err));
  });
});


