# parse-author-name

[![NPM version](https://img.shields.io/npm/v/parse-author-name.svg?style=flat)](https://www.npmjs.com/package/parse-author-name)
[![Bower version](https://img.shields.io/bower/v/parse-author-name.svg?style=flat)](https://github.com/shinnn/parse-author-name.js/releases)
[![Build Status](https://img.shields.io/travis/shinnn/parse-author-name.js.svg?style=flat)](https://travis-ci.org/shinnn/parse-author-name.js)
[![Build status](https://ci.appveyor.com/api/projects/status/78w10w4v87c1bxaq?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/parse-author-name-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-author-name.js.svg?style=flat)](https://coveralls.io/r/shinnn/parse-author-name.js)
[![devDependency Status](https://david-dm.org/shinnn/parse-author-name.js/dev-status.svg?style=flat)](https://david-dm.org/shinnn/parse-author-name.js#info=devDependencies)

Parse the name of contact info like `name <mail> (url)`

```javascript
let info = 'Shinnosuke Watanabe <snnskwtnb@gmail.com> (https://github.com/shinnn)';
parseAuthorName(info); //=> 'Shinnosuke Watanabe'
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install parse-author-name
```

#### [Bower](http://bower.io/)

```
bower install parse-author-name
```

#### [Duo](http://duojs.org/)

```javascript
const parseAuthorName = require('shinnn/parse-author-name.js');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/parse-author-name.js/master/parse-author-name.js)

## API

### parseAuthorName(*string*)

*string*: `String`  
Return: `String`

```javascript
parseAuthorName('foo <bar> (baz)'); //=> 'foo'
parseAuthorName('<foo> (bar)'); //=> ''
```

## Credit

This project is a fork of [somebody](https://github.com/sindresorhus/somebody) authored by [Sindre Sorhus](http://sindresorhus.com/hi/). Thanks, [sindresorhus](https://github.com/sindresorhus).

## Licenses

### [somebody](./LICENSES.md#somebody)

> MIT © [Sindre Sorhus](http://sindresorhus.com/)

### [parse-author-name](./LICENSES.md#parse-author-name)

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under the MIT License.
