
import * as overview from './overview';

describe('Overview', function() {

  describe('Array comprehension', () => {

    it('should filter "Seattle" city', () => {
      expect(overview.arrayComprehensionResult).to.eql([{ name: 'oof', age: 24 }]);
    });

  });

  describe('MULTIPLIER Constants', () => {

    it('should be usable', () => {
      expect(overview.MULTIPLIER * 2).to.equal(10);
    });

  });

  describe('Destructuring', () => {

    it('should be usable', () => {
      expect(overview.destructuringName({name: 'foobar'})).to.equal('foobar');
    });

  });


  describe('For of', () => {

    it('should power all numbers', () => {
      expect(overview.forOfPower([1, 2, 3])).to.eql([1, 4, 9]);
    });

  });


  describe('Template literals', () => {

    it('should format x, y ', () => {
      expect(overview.templateLiteralsXY()).to.equal('5 + 10 = 15');
    });

  });
  describe('Unicode regex', () => {

    it('should math unicode regex', () => {
      expect(overview.unicodeMatch1()).to.equal('💩');
    });

  });
});


