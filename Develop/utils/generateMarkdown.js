// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === 'MIT'){
    data.licenseBadge = 'MIT';
  }
  else{
  license === None (" ");}

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {license === None (" ");}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection =(license) => {license === None (" ");}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  -Installation
  -Usage 
  -Credits
  -License
  -Tests

  ## Installation
  What are the steps required to install your project?
  ${data.dependencies}

  ## Usage 


  ## Credits
  ${data.contribute}

  ## License
  ${data.license}

  ## Tests
  ${data.test}

`;
}

module.exports = generateMarkdown;
