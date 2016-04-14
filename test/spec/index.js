'use strict';

var expect = require('chai').expect;


describe('pick-some: ', function () {

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
    expect(pickItems()).to.be.undefined;
    expect(pickItems(null)).to.be.null;
    expect(pickItems(1)).to.be.equal(1);
  });

});
