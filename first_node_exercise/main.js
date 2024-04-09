const rewriteFile = require("./rewriteFile");
const writeFile = require("./writeFile");
const deleteFile = require("./delete");

writeFile("example", "This is a example file created with node");

setInterval(() => {
	rewriteFile("example", "This is a new example");

	setTimeout(() => {
		deleteFile('example');
	}, 5000);

	setTimeout(() => {
		writeFile("example", "This is a example file created with node");
	}, 8000);
}, 10000);
