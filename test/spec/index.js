'use strict';

var expect = require('chai').expect;


describe('pick-items: ', function () {

  var pickItems = require('../../');

  it('common', function () {

    expect(pickItems([1, 2, 3])).to.have.length.most(3);

    expect(pickItems([1, 2, 3], 1)).to.have.length(1);

    expect(pickItems([1, 2, 3], { count: 2 })).to.have.length(2);

    expect(pickItems([1, 2, 3], {
      count: 2,
      shuffled: true
    })).to.have.length(2);

    expect([1, 2, 3]).to.include.members(pickItems([1, 2, 3]));

    expect(pickItems([1, 2, 3], 0)).to.eql([]);

    expect(pickItems([], 2)).to.eql([]);


  });

  it('others, not array-like', function () {

    expect([undefined]).to.include.members(pickItems());
    expect([null]).to.include.members(pickItems(null));
    expect([1]).to.include.members(pickItems(1));

    expect('abcd'.split('')).to.include.members(pickItems('abcd'));
  });

});
