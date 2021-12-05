const inquirer = require('inquirer');


inquirer
const questions= () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?',
        },
        {
            type:'input',
            name:'github',
            message:'What is your GitHub name?',
        },
        {
            type:'input',
            name:'reason',
            message:'What is the purpose of your readme?'
        }
    ]);
};
questions().then (answers => console.log(answers));