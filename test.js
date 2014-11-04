'use strict';

var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(4);

    t.equal(main('foo <bar> (baz)'), 'foo', 'should parse author\'s name.');

    t.strictEqual(
      main('<foo>'), null,
      'should return null when it cannot parse author\'s name.'
    );

    t.throws(function() {
      main(true);
    }, /TypeError/, 'should throw a type error when it takes a non-string argument.');

    t.throws(function() {
      main();
    }, /TypeError/, 'should throw a type error when it takes no arguments.');
  });
}

runTest('require(\'parse-author-name\')', require('./'));

global.window = {};
var bowerMain = require('./bower.json').main;
require(bowerMain);

runTest('window.parseAuthorName', window.parseAuthorName);
