# parse-author-name

[![Build Status](https://travis-ci.org/shinnn/parse-author-name.js.svg?branch=master)](https://travis-ci.org/shinnn/parse-author-name.js)
[![Build status](https://ci.appveyor.com/api/projects/status/78w10w4v87c1bxaq?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/parse-author-name-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-author-name.js.svg)](https://coveralls.io/r/shinnn/parse-author-name.js)
[![devDependency Status](https://david-dm.org/shinnn/parse-author-name.js/dev-status.svg)](https://david-dm.org/shinnn/parse-author-name.js#info=devDependencies)

Parse the name of contact info like `name <mail> (url)`

```javascript
var info = 'Shinnosuke Watanabe <snnskwtnb@gmail.com> (https://github.com/shinnn)';
var name = parseAuthorName(info);

name; //=> 'Shinnosuke Watanabe'
```

## Installation

### Package managers

#### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/parse-author-name.svg)](https://www.npmjs.org/package/parse-author-name)

```sh
npm install parse-author-name
```

#### [Bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/parse-author-name.svg)](https://github.com/shinnn/parse-author-name.js/releases)

```sh
bower install parse-author-name
```

#### [Duo](http://duojs.org/)

```javascript
var parseAuthorName = require('shinnn/parse-author-name.js');
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

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under the MIT License.
