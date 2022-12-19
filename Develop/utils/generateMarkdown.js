// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    data.licenseBadge = 'MIT';
  }
  if (license === 'APACHE 2.0'){
    data.licenseBadge = 'APACHE 2.0';
  }
  if (license === 'GPL 3.0'){
    data.licenseBadge = 'GPLv3';
  }
  if (license === 'BSD 3'){
    data.licenseBadge = 'BSD3';
  }
  else{
  " ";
}

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {  
  
  if (license === 'MIT'){
  data.licenseLink = 'mit';
}
if (license === 'APACHE 2.0'){
  data.licenseLink = 'apache-2.0';
}
if (license === 'GPL 3.0'){
  data.licenseLink = 'gpl-3.0';
}
if (license === 'BSD 3'){
  data.licenseLink = 'bsd-3.0';
}
else{
  " ";
}

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {  
  
  if (!data.license){
    "";
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License
  ${data.licenses}
  
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

module.exports = generateMarkdown;
