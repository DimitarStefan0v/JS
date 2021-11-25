const { isSymmetric } = require('./checkForSymmetry');
const { expect } = require('chai');

describe('Symmetry checker', () => {
    it('returns true for symmetric array with strings', () => {
        expect(isSymmetric(['A', 'B', 'C', 'C', 'B', 'A'])).to.be.true;
    });
    it('returns true for symmetric array with numbers', () => {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
    });
    it('returns false for non-symmetric array', () => {
        expect(isSymmetric(['A', 'B', 'C', 'D', 'E', 'F'])).to.be.false;
    });
    it('returns false for non array parameter', () => {
        expect(isSymmetric('ABCCBA')).to.be.false;
    });
    it('returns true if there is only one element in the array', () => {
        expect(isSymmetric([1])).to.be.true;
    });
    it('returns true for empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });
    it('returns false for odd number of elements in the array', () => {
        expect(isSymmetric([1, 2, 3, 4, 4, 3, 2])).to.be.false;
    });
    it('returns false for type-different elements in the array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});