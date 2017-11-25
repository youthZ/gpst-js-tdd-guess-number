const main = require('../main/main');

describe('main()', () => {
	it('shoule guess number correct number and position',function(){
		var randomNumber = '1234';
		var guessNumber = '1234';
		var result = main(randomNumber,guessNumber);
		var expected = '4A0B'
		expect(result).toEqual(expected);
	});

	it('shoule guess number correct number and position',function(){
		var randomNumber = '1234';
		var guessNumber = '4321';
		var result = main(randomNumber,guessNumber);
		var expected = '0A4B'
		expect(result).toEqual(expected);
	});
});