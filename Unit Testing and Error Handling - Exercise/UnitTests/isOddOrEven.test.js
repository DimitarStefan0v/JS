const { isOddOrEven } = require('./isOddOrEven');
const { expect } = require('chai');

describe('Test Odd Or Even function', () => {
    it('if parameter is not of type string the function should return undefined', () =>{
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven({ 'odd': 3 })).to.be.undefined;
        expect(isOddOrEven(['new', 'string'])).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
    });

    it('if parameter is string with odd length the function should return string odd', () => {
        expect(isOddOrEven('God')).to.equal('odd');
        expect(isOddOrEven('mocha')).to.equal('odd');
    });

    it('if parameter is string with even length the function should return string even', () => {
        expect(isOddOrEven('chai')).to.equal('even');
        expect(isOddOrEven('Insanity')).to.equal('even');
    });

    it('if passed multiple string parameters the function will take only the first and check if its length is odd or even', () => {
        expect(isOddOrEven('chai', 'mocha')).to.equal('even');
        expect(isOddOrEven('mocha', 'chai')).to.equal('odd');
    });
});