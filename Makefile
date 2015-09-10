all: firefox chrome

firefox: data/* index.js package.json .jpmignore
	jpm xpi
	mkdir -p dist/firefox
	mv *.xpi dist/firefox/collapsible-diffs.xpi

chrome: data/* manifest.json
	mkdir -p dist/chrome/files
	cp manifest.json dist/chrome/files
	cp data/collapsify-diffs.js dist/chrome/files
	zip -rj dist/chrome/collapsible-paths.zip dist/chrome/files/*

