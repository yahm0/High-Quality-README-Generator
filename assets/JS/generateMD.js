// function to render a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

// function to render license link
function renderLicenseLink(license) {
    if (license !== 'None') {
        return (
            `\n* [License](#license)\n`
        );
    }
    return '';
}

// function to render license section on the readme.md
function renderLicenseSection(license) {
    if (license !== 'None') {
        return (
            `## License

This project is licensed under the ${license} license.`
        );
    }
    return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#description)
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