
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')


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

const questions= [   
            {
            type:'input',
            name:'name',
            message:'What is your name?',
            validate: nameInput =>{
                if (nameInput) {
                    return true;
                }else{
                    console.log('Do not be shy.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'github',
            message:'What is your GitHub name?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }else{
                    console.log('Let us help users find your account.');
                }
            }
        },
        {
            type:'input',
            name:'reason',
            message:'What is the purpose of your readme?',
            validate: reasonInput => {
                if (reasonInput) {
                    return true;
                }else{
                    console.log('The most important part of a ReadMe is to give it purpose!');
                }
            }
        },
            {
            type: 'input',
            name: 'project name',
            message: 'What is your project name?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Your project name would be really helpful!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'install',
            message:'What programs need to be installed for your project to operate?',
            validate: installInput => {
                if (installInput) {
                    return true;
                }else{
                    console.log('No programs? Just say none.');
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'guide',
            message:'How do you use your project',
            validate: guideInput =>{
                if (guideInput){
                    return true;
                }else{
                    console.log('Explain HOW you want your ReadMe to assist your client');
                    return false;
                }

            }
        },
        {
            type:'input',
            name:'credits',
            message:'Who is involved in the project',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                }else {
                    console.log('Take Pride in your project! At least give yourself credit');
                    return false;
                }
            }
        },
        {
            type:'checkbox',
            name:'licensing',
            message:'Security licensing',
            choices: [ 'MIT', 'Boost Software License 1.0', 'Open Software License 3.0', 'GNU General Public License v3.0', 'Boost Software License 1.0' 
            ],
            validate: licensingCheckbox => {
                if (licensingCheckbox) {
                    return true;
                }else{
                    console.log('It is very important to keep your project protected.');
                    return false;
                }
            }
        }   
    ];

function writeToFile(fileName, data) {
    //const pageHTML= generateMarkdown (fileName, data);
        return fs.writeFile(fileName, data, err => {
            if (err) {
                throw Error (err)
            }
        })
}

function init() {
    inquirer.prompt (questions)
     .then (answers => {
         const markDown = generateMarkdown (answers)
         writeToFile('readMe.md',markDown)
     }
     )   
}

init();
