const fs = require("fs");

module.exports = function readFile(name) {
    fs.readFile(`first_node_exercise/${name}.txt`,'utf-8', (err, data) => {
        if (err) {
            console.error(`Error: ${err}`)
            return
        }

        console.log(`File contents: ${data}`)
    })
}
