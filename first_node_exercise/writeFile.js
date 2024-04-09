const fs = require("fs");
const readFile = require("./readFile");

module.exports = function writeFileAtSameDir(name, data) {
	fs.writeFile(`first_node_exercise/${name}.txt`, data, "utf-8", (err) => {
		if (err) {
			console.error(`Error: ${err}`);
			return; // Exiting the function after encountering an error
		}

		console.log("Successful");
		readFile(name);
	});
};
