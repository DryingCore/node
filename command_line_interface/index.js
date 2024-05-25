const cmd = require("inquirer");

async function askPassword() {
    const answer = await cmd.prompt([{
        type: "password",
        name: "password",
        message: "enter your password: ",
        mask: "*"
    }])

    console.log(answer.password)
}
