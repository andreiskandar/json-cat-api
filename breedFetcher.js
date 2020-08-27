const request = require('request');
const { catURI } = require('./constants');

const breedInput = process.argv.slice(2)[0];
const breedSearchURI = catURI + breedInput;

// const getAPIbody = callback =>
request(breedSearchURI, (error, response, body) => {
	//what if breed is not found
	if (error) {
		return console.log(`${error}, Breed is not found`);
		//what if typo domain
	} else if (response.statusCode !== 200) {
		return console.log(`HTTP code: ${response.statusCode}`);
	}
	const data = JSON.parse(body);
	const breed = data[0];
	if (!breed) {
		return console.log('Breed not found');
	} else {
		return console.log(`${breed.description}`);
	}
});
