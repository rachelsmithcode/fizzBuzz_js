// test via refresh browser page file:///Users/RachelSmith/Projects/jasmine/jasmine-standalone-2.4.1/SpecRunner.html

describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('3 will Fizz', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('9 will Fizz', function() {
      expect(fizzBuzz.play(9)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('5 will Buzz', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('10 will Buzz', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('15 will FizzBuzz', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it('30 will Fizzbuzz', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('numbers not divisible by 3 or 5', function() {
    it('returns 1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it('returns 11 for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});
