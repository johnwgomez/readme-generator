// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  const badges = {
      MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-red.svg)'
  };
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  const links = {
      MIT: '[MIT License](https://opensource.org/licenses/MIT)',
      GPLv3: '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)',
      'Apache 2.0': '[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)'
  };
  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License
  
This project is licensed under the ${license} license.  
For more details, see: ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})  
Email: ${data.email} (Reach out for further inquiries!)
`;
}

export default generateMarkdown;
