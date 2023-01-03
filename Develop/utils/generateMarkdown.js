const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseBadge
  if (license === 'MIT') {
    licenseBadge = 'MIT';
  }
  if (license === 'APACHE 2.0') {
    licenseBadge = 'Apache_2.0';
  }
  if (license === 'GPL 3.0') {
    licenseBadge = 'GPLv3';
  }
  if (license === 'BSD 3') {
    licenseBadge = 'BSD_3';
  }
  if (license === 'None') {
    licenseBadge = 'No_License';
  }
  return (`(https://img.shields.io/badge/License-${licenseBadge}-blue.svg)`);
  
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'MIT') {
    licenseLink = 'MIT';
  }
  if (license === 'APACHE 2.0') {
    licenseLink = 'Apache2.0';
  }
  if (license === 'GPL 3.0') {
    licenseLink = 'gpl-3.0';
  }
  if (license === 'BSD 3') {
    licenseLink = 'BSD-3-Clause';
  }
  if (license === 'None') {
    licenseLink = '';
  }
  return (`(https://opensource.org/licenses/${licenseLink})`);


};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license.license) {
    "";
  }

};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License
  ${data.license}

  
  [![License]${renderLicenseBadge(data.license)}]${renderLicenseLink(data.license)}
  
  
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributions](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  What are the steps required to install your project?
  ${data.dependencies}

  ## Usage 
  ${data.instructions}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  Here is a link to my GitHub Profile https://github.com/${data.username}\n
  You can reach me at my email ${data.email} if you have any other questions.



`;

}

module.exports = generateMarkdown, renderLicenseSection, renderLicenseLink, renderLicenseBadge;
