var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: [
	    /https?:\/\/github.com\/.*\/pull\/.*/,
	    /https?:\/\/github.com\/.*\/commit\/.*/
    ],
    contentScriptFile: "./collapsify-diffs.js"
});
