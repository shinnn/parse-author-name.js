/*!
 * parse-author-name | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/parse-author-name
 *
 * This project is a fork of:
 *
 * somebody | MIT (c) Sindre Sorhus
 * https://github.com/sindresorhus/somebody
*/

module.exports = function parseAuthorName(str) {
  'use strict';

  if (typeof str !== 'string') {
    throw new TypeError(
      str +
      ' is not a string. Argument must be a string of contact info like "name <mail> (url)".'
    );
  }

  str = str.trim();

  var name = /^([^<(]+)/.exec(str);
  if (name) {
    return name[1].trim();
  }

  return null;
};
