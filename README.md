# pick-items

> Randomly sampling some items from an array.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/pick-items/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/pick-items/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/pick-items)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/pick-items/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/pick-items)



## Install

```
$ npm install --save pick-items 
```



## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/pick-items/blob/master/test/spec/index.js)

```js
var pickItems = require('pick-items');

pickItems([1, 2, 3, 4, 5]);
// => [2, 5]

pickItems([1, 2, 3, 4, 5], 3);
// => [1, 2, 4]

pickItems([1, 2, 3, 4, 5], { count: 3, shuffled: true });
// => [3, 1, 5]
```

## API

### pickSome(array, [options/count])

`array` - an array or array-like object.

`options.count` - how many items should be picked.

`options.shuffled` - the result is shuffled or not.


## Related

- [pick-item](https://github.com/bubkoo/pick-item) - Randomly sampling a item from an array.
- [is-index](https://github.com/bubkoo/is-index) - Checks if the given value is a valid array-like index.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.
- [to-length](https://github.com/bubkoo/to-length) - Converts value to an integer suitable for use as the length of an array-like object.
- [drop-left](https://github.com/bubkoo/drop-left) - Creates a slice of array with n elements dropped from the beginning.
- [drop-right](https://github.com/bubkoo/drop-right) - Creates a slice of array with n elements dropped from the end.
- [shuffle-arr](https://github.com/bubkoo/shuffle-arr) - Randomize the order of the elements in an array or array-like object. 
- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or array-like object.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/pick-items/issues/new).
