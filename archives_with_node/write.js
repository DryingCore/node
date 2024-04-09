const fs = require("node:fs");

try {
	fs.writeFile("node.txt", "Hello world!", "utf-8", (error) => {
		if (error) console.error(error.message);
	});
    console.log('The file was wrote')
} catch (error) {
	console.error(`Error while trying to write file: ${error.message}`);
}
