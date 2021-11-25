const rgbToHexColor = require('./rgb-to-hex');
const { expect } = require('chai');

describe('RGB Converter', () => {
    it('convert white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('convert black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('convert SoftUni dark blue #234465', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    });

    it('returns undefined for missing parameter', () => {
        expect(rgbToHexColor(255, 255)).to.be.undefined;
    });

    it('returns undefined for values out of range', () => {
        expect(rgbToHexColor(-1, -5, -3)).to.be.undefined;
    });

    it('returns undefined for values out of range', () => {
        expect(rgbToHexColor(256, 320, 258)).to.be.undefined;
    });
});