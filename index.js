var githubData = require("./utils/api.js");
var file = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is the project title?"
  },
  {
    type: "input",
    name: "description",
    message: "What is the project description?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is screenshot url?"
  }
];

function promptUser() {
  return inquirer.prompt(questions);
}

function writeToFile(answers, profilePhoto, gitHubEmail) {
  const readmeData = file(answers, profilePhoto, gitHubEmail);
  writeFileAsync("README.md", readmeData);
}

async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();
    const { data } = await githubData.getUser("mandywl");
    const profilePhoto = data.avatar_url;
    const gitHubEmail = data.email;
    //console.log(gitHubEmail);
    writeToFile(answers, profilePhoto, gitHubEmail)
    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();
