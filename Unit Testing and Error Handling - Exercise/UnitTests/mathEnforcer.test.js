const { mathEnforcer } = require('./mathEnforcer');
const { expect } = require('chai');

describe('Test mathEnforcer object method addFive', () => {
    it('addFive method should return undefined if passed parameter is not number', () => {
        expect(mathEnforcer.addFive('parameter')).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
    });

    it('addFive method should return the parameter incremented with five', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(13)).to.be.equal(18);
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        expect(mathEnforcer.addFive(3.33)).to.be.equal(8.33);
    });
});

describe('Test mathEnforcer object method subtractTen', () => {
    it('subtractTen method should return undefined if passed parameter is not number', () => {
        expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

    it('subtractTen method should return the parameter decremented with ten', () => {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        expect(mathEnforcer.subtractTen(3)).to.be.equal(-7);
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        expect(mathEnforcer.subtractTen(14.43)).to.be.equal(4.43);
    });
});

describe('Test mathEnforcer object method sum', () => {
    it('sum method should return undefined if either of the parameters are not numbers', () => {
        expect(mathEnforcer.sum('asd', 3)).to.be.undefined;
        expect(mathEnforcer.sum(5, 'my')).to.be.undefined;
        expect(mathEnforcer.sum(5, [])).to.be.undefined;
        expect(mathEnforcer.sum({}, 2)).to.be.undefined;
    });

    it('sum method should return the sum of the two parameters', () => {
        expect(mathEnforcer.sum(10, 5)).to.be.equal(15);
        expect(mathEnforcer.sum(-10, -5)).to.be.equal(-15);
        expect(mathEnforcer.sum(-3, 5)).to.be.equal(2);
        expect(mathEnforcer.sum(10.26, 5)).to.be.equal(15.26);
    });
});