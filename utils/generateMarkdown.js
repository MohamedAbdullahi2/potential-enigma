// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
<<<<<<< HEAD
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n` 
  } return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'none') return '';

  const badge = renderLicenseBadge(license);
  return `## License\n\nThis project is licensed under the ${license} license. ${badge}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}

  #  Project Title
  ${data.title}
 
##  Description
 ${data.description}

## Technologies
${data.tech.join(", ")}
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions  
See my Github [GitHub](https://www.github.com/${data.github})  
Email me  <${data.email}>
`;
}


=======
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

>>>>>>> db88dda01b5af56c2d699e5b7ae974f999ceb658
module.exports = generateMarkdown;
