'use strict';

const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.plan(5);

    t.equal(main.name, 'parseAuthorName', 'should have a function name.');

    t.equal(main('foo <bar> (baz)'), 'foo', 'should parse author\'s name.');

    t.strictEqual(
      main('<foo>'),
      null,
      'should return null when it cannot parse author\'s name.'
    );

    t.throws(
      () => main(true),
      /TypeError.*true.*must be a string/,
      'should throw a type error when it takes a non-string argument.'
    );

    t.throws(
      () => main(),
      /TypeError.*undefined.*must be a string/,
      'should throw a type error when it takes no arguments.'
    );
  });
}

runTest('require(\'parse-author-name\')', require('.'));

global.window = {};
require('./' + require('./bower.json').main);

runTest('window.parseAuthorName', window.parseAuthorName);
