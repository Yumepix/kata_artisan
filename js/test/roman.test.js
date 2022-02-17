const { assert}  = require('chai')
const Roman = require('../src/roman.js')

describe('Roman', function() {
    let roman;
    beforeEach(function() {
        roman = new Roman();
    });

    it('should decode CDXLVIII into integer 448', function() {
        assert.equal(roman.decode('CDXLVIII'),448);
    });

    it('should decode MCMXCVIII into integer 1998', function() {
        assert.equal(roman.decode('MCMXCVIII'),1998);
    });

    it('should decode I into integer 1', function() {
        assert.equal(roman.decode('I'),1);
    });

    it('should decode V into integer 5', function() {
        assert.equal(roman.decode('V'),5);
    });

    it('should decode L into integer 50', function() {
        assert.equal(roman.decode('L'),50);
    });

    it('should decode C into integer 100', function() {
        assert.equal(roman.decode('C'),100);
    });

    it('should decode D into integer 500', function() {
        assert.equal(roman.decode('D'),500);
    });

    it('should decode M into integer 1000', function() {
        assert.equal(roman.decode('M'),1000);
    });

    it('should sum II and return 2', function() {
        assert.equal(roman.decode('II'),2);
    });

    it('should substract I of V and return 4', function() {
        assert.equal(roman.decode('IV'),4);
    });

    it('should decode DCLXVI and return 666', function() {
        assert.equal(roman.decode('DCLXVI'),666);
    });

    it('should decode MMMMMMMMMMMMDXLIX and return 12549', function() {
        assert.equal(roman.decode('MMMMMMMMMMMMDXLIX'),12549);
    });

});
