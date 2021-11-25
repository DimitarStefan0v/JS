const { createCalculator } = require('./addSubtract');
const { expect } = require('chai');

describe('Summator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('starts empty', () => {
        expect(instance.get()).to.equal(0);
    });

    it('add numbers correctly', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
        instance.add(7);
        expect(instance.get()).to.equal(8);
    });

    it('subtract numbers correctly', () => {
        instance.add(20);
        instance.subtract(4);
        expect(instance.get()).to.equal(16);
        instance.subtract(7);
        expect(instance.get()).to.equal(9);
    });

    it('works with numbers as strings', () => {
        instance.add('10');
        instance.subtract('7');
        expect(instance.get()).to.equal(3);
    });
});