/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import chai = require('chai');
var expect = chai.expect;

import SUT = require('../src/fizzbuzz');
var FizzBuzz = SUT.FizzBuzz;

var fizzNumbers = {
	args: [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48],
	expected: "Fizz"
};

describe("FizzBuzz", () => {
	describe("getResult", () => {
		fizzNumbers.args.forEach((num) => {
			it(num + ' returns Fizz', () => {
				var fb = new FizzBuzz();
				expect(fb.getResult(num)).equals("Fizz");
			});
		});
	});
});

describe('FizzBuzz', () => {
	var fb = new FizzBuzz();


	it('returns one when given one', () => {
		var result = fb.getResult(1);
		expect(result).equals(1);
	});

	it('returns two when given two', () => {
		var result = fb.getResult(2);
		expect(result).equals(2);
	});

	it('returns Fizz when given three', () => {
		var result = fb.getResult(3);
		expect(result).equals("Fizz");
	});

	it('returns 4 when given 4', () => {
		var result = fb.getResult(4);
		expect(result).equals(4);
	});

	it('returns Buzz when given 5', () => {
		var result = fb.getResult(5);
		expect(result).equals("Buzz");
	});

	it('returns Fizz when given 6', () => {
		var result = fb.getResult(6);
		expect(result).equals("Fizz");
	});

	it('returns Fizz when given 9', () => {
		var result = fb.getResult(9);
		expect(result).equals("Fizz");
	});

	it('returns Buzz when given 10', () => {
		var result = fb.getResult(10);
		expect(result).equals("Buzz");
	});

	it('returns FizzBuzz when given 15', () => {
		var result = fb.getResult(15);
		expect(result).equals("FizzBuzz");
	});

});