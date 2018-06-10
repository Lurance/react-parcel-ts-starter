(async () => {
	const Bundler = require('parcel-bundler')
	const Path = require('path')

	const file = Path.join(__dirname, '../index.html')

	const options = {
		outDir: './dist',
		outFile: 'index.html',
		publicUrl: './',
		watch: false,
		cache: true,
		cacheDir: '.cache',
		minify: true,
		target: 'browser',
		https: false,
		logLevel: 3,
		sourceMaps: false,
		detailedReport: true
	}

	const bundler = new Bundler(file, options);

	const bundle = await bundler.bundle();
})()