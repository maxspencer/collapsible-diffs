firefox: data/* index.js package.json .jpmignore
	jpm xpi
	mkdir -p dist/firefox
	mv *.xpi dist/firefox

chrome: data/* manifest.json
	mkdir -p dist/chrome
	cp manifest.json dist/chrome
	cp data/collapsify-diffs.js dist/chrome

