
import {Something} from './something';

describe('something', function() {
  var something;

  beforeEach(function() {
    something = new Something();
  });

  it('should work', function() {
    expect(something.sum(1, 2)).toBe(3);
  });

  xit('should silently fail', function() {
      expect(() => something.sum(1, 'invalid')).toThrow();
  });
});


