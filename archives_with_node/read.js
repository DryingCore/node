const fs = require("fs");

fs.readFile("archives_with_node/file/node.txt", (error, data) => {
	if (error) {
		console.error(`Error while trying to read file: ${error.message}`);
		return; // Exit the function early if there's an error
	}

	console.log(data.toString()); // Convert the Buffer to a string and log it
});
