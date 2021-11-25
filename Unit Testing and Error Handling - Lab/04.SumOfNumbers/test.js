const { sum } = require('./sum');
const { expect } = require('chai');

describe('Demo test', () => {
    it('Array with equal numbers', () => {
        expect(sum([5, 5, 5, 5, 5])).to.equal(25);
    });
    it('Array with different numbers', () => {
        expect(sum([5, 3, 2, 7, -8, -2, 10])).to.equal(17);
    });
    it('Array with single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('Empty array should return 0', () => {
        expect(sum([])).to.equal(0);
    });
});