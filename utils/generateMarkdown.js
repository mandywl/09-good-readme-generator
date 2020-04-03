function generateMarkdown(data, profilePhoto, gitHubEmail) {
  return `
# ${data.title}  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
<a name="desc"></a>
${data.description}

## Table of Contents
-------
- [Description](#desc)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)

## Installation
-------
$ npm install

## Usage
-------
![App Screenshot](${data.usage})


## License
-------
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

## Contributing
-------

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request.

## Tests
-------
- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample "README".

## Questions
-------
* User GitHub profile picture  
![profile photo](${profilePhoto})
* User GitHub email: ${gitHubEmail}

`;
}

module.exports = generateMarkdown;
