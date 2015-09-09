xpi: data/* index.js package.json .jpmignore
	jpm xpi
	mkdir -p dist/firefox
	mv *.xpi dist/firefox