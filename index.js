global.Promise = require('pinkie-promise');

var spawn = require('child_process').spawn;
var concat = require('concat-stream');
var timeout = 100;

module.exports = function(cliPath, combo) {
  var proc = spawn('node', [cliPath], { stdio: [null, null, null] });
  proc.stdin.setEncoding('utf-8');

  var loop = function(combo) {
    if (combo.length > 0) {
      setTimeout(function() {
        proc.stdin.write(combo[0]);
        loop(combo.slice(1));
      }, timeout);
    } else {
      proc.stdin.end();
    }
  };

  loop(combo);

  return new Promise(function(resolve) {
    proc.stdout.pipe(concat(function(result) {
      resolve(result.toString());
    }));
  });
};

module.exports.DOWN = '\x1B\x5B\x42';
module.exports.UP = '\x1B\x5B\x41';
module.exports.ENTER = '\x0D';
