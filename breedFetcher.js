const request = require('request');
const catURI = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
	const breedSearchURI = catURI + breedName;

	request(breedSearchURI, (error, response, body) => {
		//what if breed is not found
		if (error) {
			return callback(error, null);
			//what if typo domain
		} else if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}

		const data = JSON.parse(body);
		const breed = data[0];
		if (!breed) {
			callback('Breed not found', null);
			return;
		} else {
			callback(null, breed.description);
			return;
		}
	});
};

module.exports = fetchBreedDescription;
