const fs = require("fs");
const readFile = require("./readFile");

module.exports = function reWriteFile(name, newData) {
	fs.writeFile(`first_node_exercise/${name}.txt`, newData, "utf-8", (err) => {
		if (err) {
			console.error(`Error: ${err}`);
			return;
		}

		console.log("File reWrite complete with sucess");
		readFile(name);
	});
};
