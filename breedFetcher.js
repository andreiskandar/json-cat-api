const request = require('request');
const catURI = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
	const breedSearchURI = catURI + breedName;

	request(breedSearchURI, (error, response, body) => {
		//what if breed is not found
		if (error) {
			callback = error;
			return console.log(`${error}, Breed is not found`);
			//what if typo domain
		} else if (response.statusCode !== 200) {
			callback = response.statusCode;
			return console.log(`HTTP status code: ${response.statusCode}`);
		}
		const data = JSON.parse(body);
		const breed = data[0];
		if (!breed) {
			return console.log('Breed not found');
		} else {
			return console.log(`${breed.description}`);
		}
	});
};

module.exports = fetchBreedDescription;
