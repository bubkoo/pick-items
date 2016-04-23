# pick-items

> Given an array, pick some random elements and return them in a new array.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/pick-items/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/pick-items/master.svg?style=flat-square)](https://travis-ci.org/mock-end/pick-items)
[![coverage:?](https://img.shields.io/coveralls/mock-end/pick-items/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/pick-items)


## Install

```
$ npm install --save pick-items 
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/pick-items/blob/master/test/spec/index.js)

```js
var pickItems = require('pick-items');

// API
// - pickItems(array)
// - pickItems(array, count)
// - pickItems(array, options)
```

By default omit the quantity to retrieve a set with a random length:

```js
pickItems([1, 2, 3, 4, 5]);
// => [2, 5]
```

Can optionally specify the quantity to retrieve:

```js
pickItems([1, 2, 3, 4, 5], 3);
// => [1, 2, 4]
```

Can optionally shuffle the new array or not:

```js
pickItems([1, 2, 3, 4, 5], { count: 3, shuffled: true });
// => [3, 1, 5]
```

## Related

- [pick-item](https://github.com/mock-end/pick-item) - Given an array, pick a random element and return it.
- [pick-prop](https://github.com/mock-end/pick-prop) - Given an object, pick a random property and return it.
- [pick-props](https://github.com/mock-end/pick-props) - Given an object, pick some random properties and return them in an array.
- [pick-key](https://github.com/mock-end/pick-key) - Given an object, pick a random key and return it.
- [pick-keys](https://github.com/mock-end/pick-keys) - Given an object, pick some random keys and return them in an array.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/pick-items/issues/new).
