const wiki = require('../dist/index');

(async () => {
<<<<<<< Updated upstream
	const result = await wiki.geoSearch(8.525827777777776, 76.936975);
=======
	const result = await wiki.summary('batman');
>>>>>>> Stashed changes
	console.log(result);
})().catch(error => {
	console.log(`${error.message}`);
	process.exit(1);
}); 
