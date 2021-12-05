const { prompt } = require('inquirer');
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
//questions().then (answers => console.log(answers));

const readmeInfo = () => {
    console.log(`
        ===============================================
                 Your ReadMe starts now!
        Plan ahead, your ReadMe should have a nice 
        table of contents. Think of how you want the 
        layout to look. We are going to add prompts for
        1. Installation guide, 2. Usage guide, 3. Credits
        for the project, 4. Licensing. Fill out the 
        following to get started. 
        ===============================================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project name',
            message: 'What is your project name?'
        },
        {
            type:'input',
            name:'install',
            message:'What programs need to be installed for your project to operate?'

        },
        {
            type:'input',
            name:'guide',
            message:'How do you use your project'
        },
        {
            type:'input',
            name:'credits',
            message:'Who is involved in the project'
        },
        {
            type:'checkbox',
            name:'licensing',
            message:'Security licensing',
            choices: [
                {name:'MIT'},
                {name:'Microsoft Public License'},
                {name:'Open Software License 3.0'},
                {name:'GNU General Public License v3.0'},
                {name:'Boost Software License 1.0'}
            ]
        }   
    ]);
};


questions()
     .then (questions => console.log(questions))
     .then (readmeInfo)
     .then (readmeInfo => console.log (readmeInfo));

