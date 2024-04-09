const fs = require("fs");

module.exports = function deleteFile(name) {
	fs.unlink(`first_node_exercise/${name}.txt`, (err) => {
		if (err) {
			console.error(`Error: ${err}`);
			return;
		}

		console.log(`File deleted from: ${name}`);
	});
};
