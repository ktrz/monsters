System.config({
	packages: {
		'target': {
			format: 'register',
			defaultExtension: 'js'
		}
	}
});
System.import('./target/main.js')
	.catch(function (err) {
		console.error(err);
	});