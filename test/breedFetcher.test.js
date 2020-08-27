const fetchBreedDescription = require('../breedFetcher');
const assert = require('chai').assert;

describe('#fetchBreedDescription()', () => {
	it('should return a string description for a valid breed, via callback', done => {
		fetchBreedDescription('Siberian', (err, desc) => {
			//we expect no error for this scenario
			assert.equal(err, null);
			done();
		});
	});
	it('should return a same string description for a valid breed, via callback', done => {
		fetchBreedDescription('Siberian', (err, desc) => {
			const expectedDesc =
				'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ';
			assert.equal(desc, expectedDesc);
			done();
		});
	});
});
