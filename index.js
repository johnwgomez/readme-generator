// TODO: Include packages needed for this application
// inquirer used for command prompt lines
//fs for file system interaction
// 
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'Project Title:' },
    { type: 'input', name: 'description', message: 'Project Description:' },
    { type: 'input', name: 'installation', message: 'Installation Instructions:' },
    { type: 'input', name: 'usage', message: 'Usage Information:' },
    { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'] },
    { type: 'input', name: 'contributing', message: 'Contribution Guidelines:' },
    { type: 'input', name: 'tests', message: 'Test Instructions:' },
    { type: 'input', name: 'github', message: 'GitHub Username:' },
    { type: 'input', name: 'email', message: 'Email Address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log(`Successfully created ${fileName}!`);
    } catch (error) {
        console.error(`Error writing file: ${error.message}`);
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
