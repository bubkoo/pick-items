'use strict';


var isArrayLike = require('is-array-like');
var isIndex     = require('is-index');
var toLength    = require('to-length');
var randomIndex = require('random-index');

module.exports = function (arr, options) {

  if (!arr || !isArrayLike(arr)) {
    return arr;
  }

  var length = arr.length;
  if (!length) {
    return [];
  }

  var count;
  var shuffled;

  if (typeof options === 'object') {
    count    = options.count;
    shuffled = options.shuffled;
  } else {
    count    = options;
    shuffled = false;
  }

  count = isIndex(count) ? toLength(count) : randomIndex(length);

  // pick one
  if (count === 1) {
    return [arr[randomIndex(length - 1)]];
  }

  // pick some
  var indexArr = [];
  for (var i = 0; i < length; i++) {
    indexArr[i] = i;
  }

  var candidates = [];

  while (count && length) {
    var index = randomIndex(length - 1);
    candidates.push(indexArr[index]);
    indexArr.splice(index, 1);
    length -= 1;
    count -= 1;
  }

  if (!shuffled) {
    candidates.sort();
  }


  var result = [];
  while (candidates.length) {
    result.push(arr[candidates.shift()]);
  }

  return result;
};
