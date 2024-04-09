import fs from "node:fs";

export function createFile(text) {
	fs.writeFile("meuArquivo.txt", text, (err) => {
		if (err) {
			throw new Error(err);
		}
		console.log("File created successfully!");
	});
}

export function showFile() {
	fs.readFile("meuArquivo.txt", "utf-8", (err, text) => {
		if (err) {
			throw new Error(err);
		}
		console.log(`Content: ${text}`);
	});
}

export function updateFile(updatedText) {
    fs.writeFile("meuArquivo.txt", updatedText, (err) => {
		if (err) {
			throw new Error(err);
		}
		console.log("File created successfully!");
	});
}

export function deleteFile() {
    fs.unlink('meuarquivo.txt', (err) => {
        if (err) {
            throw new Error(err)
        }
        console.log('File deleted with sucess')
    })
}