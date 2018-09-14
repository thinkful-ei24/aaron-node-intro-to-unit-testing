const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('It should return fizz-buzz', function() {
        const normalCases = [
            {a: 15, b: 'fizz-buzz'},
            {a: 150, b: 'fizz-buzz'},
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.b);
        });
    });
    it('It should return buzz', function() {
        const normalCases = [
            {a: 5, b: 'buzz'},
            {a: 50, b: 'buzz'},
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.b);
        });
    });
    it('It should return fizz', function() {
        const normalCases = [
            {a: 3, b: 'fizz'},
            {a: 9, b: 'fizz'},
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.b);
        });
    });
    it('It should return the original number', function() {
        const normalCases = [
            {a: 11, b: 11},
            {a: 13, b: 13},
            {a: 97, b: 97}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.b);
        });
    });
    it('Should throw error if input is not a number', function() {
        const badCases = [
            {a: 'a string'},
            {a: true},
            {a: null}
        ];
        badCases.forEach(function() {
            expect(function() {
                fizzBuzzer(input.a);
            }).to.throw(Error);
        });
    });
});