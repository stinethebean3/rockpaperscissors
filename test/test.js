var assert = require('assert');
var expect = require('chai').expect;
var rps = require('../main').rps;

describe('Rockpaperscissors', function() {
    describe('rps()', function() {
        it('should return rock when provided scissors and rock', function() {
	    assert.equal(rps('scissors','rock'),'rock');
	});
        it('should return rock when provided rock and scissors', function() {
	    assert.equal(rps('rock','scissors'),'rock');
	});
        it('should return paper when provided paper and rock', function() {
	    assert.equal(rps('paper','rock'),'paper');
	});
        it('should return paper when provided rock and paper', function() {
	    assert.equal(rps('rock','paper'),'paper');
	});
        it('should return scissors when provided scissors and paper', function() {
	    assert.equal(rps('scissors','paper'),'scissors');
	});
        it('should return scissors when provided paper and scissors', function() {
	    assert.equal(rps('paper','scissors'),'scissors');
	});
        it('should return tie when provided scissors and scissors', function() {
	    assert.equal(rps('scissors','scissors'),'tie');
	});
        it('should return tie when provided rock and rock', function() {
	    assert.equal(rps('rock','rock'),'tie');
	});
        it('should return tie when provided paper and paper', function() {
	    assert.equal(rps('paper','paper'),'tie');
	});
        it('should return error when provided invalid choice', function() {
	    expect(rps('banana','peanut')).to.be.a('error');
	});
        it('should return rock when provided RoCk and SciSSorS', function() {
	    assert.equal(rps('RoCk','SciSSorS'),'rock');
	});
    });
});
