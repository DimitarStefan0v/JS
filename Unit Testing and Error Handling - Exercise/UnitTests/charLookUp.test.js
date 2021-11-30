const { lookupChar } = require('./charLookUp');
const { expect } = require('chai');

describe('Test lookupChar function', () => {
    it('if parameter is not of type string the function should return undefined', () => {
        expect(lookupChar(5, 3)).to.be.undefined;
        expect(lookupChar(['God'], 2)).to.be.undefined;
    });

    it('if index is not integer the function should return undefined', () => {
        expect(lookupChar('Hello', 3.2)).to.be.undefined;
        expect(lookupChar('Hello', 'index')).to.be.undefined;
    });

    it('if index is out of range the function should return Incorrect index', () => {
        expect(lookupChar('Hello, SoftUni', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('Hello, SoftUni', 50)).to.be.equal('Incorrect index');
    });

    it('if parameters are correctly the function should return char at given index of string', () => {
        expect(lookupChar('SoftUni', 4)).to.be.equal('U');
        expect(lookupChar('SoftUni', 6)).to.be.equal('i');
    });
});