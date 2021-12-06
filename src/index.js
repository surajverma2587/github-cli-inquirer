const inquirer = require("inquirer");

const { githubQuestion } = require("./questions");
const { generateActionChoices } = require("./choices");
const { displayUserInfo } = require("./github");

const start = async () => {
  let usernameExists = true;

  while (usernameExists) {
    const { githubUsername } = await inquirer.prompt(githubQuestion);

    let inProgress = true;
    usernameExists = false;

    while (inProgress) {
      const actionQuestion = {
        type: "list",
        message: "Select an action:",
        name: "action",
        choices: generateActionChoices(githubUsername),
      };

      const { action } = await inquirer.prompt(actionQuestion);

      if (action === "aboutUser") {
        const isValid = await displayUserInfo(githubUsername);

        if (!isValid) {
          usernameExists = true;
          inProgress = false;
        }
      }

      if (action === "allRepos") {
        console.log("allRepos");
      }

      if (action === "recentlyCreated") {
        console.log("recentlyCreated");
      }

      if (action === "recentlyUpdated") {
        console.log("recentlyUpdated");
      }

      if (action === "allFollowers") {
        console.log("allFollowers");
      }

      if (action === "findRepo") {
        console.log("findRepo");
      }

      if (action === "differentUser") {
        usernameExists = true;
        inProgress = false;
      }

      if (action === "exit") {
        inProgress = false;
        process.exit(0);
      }
    }
  }
};

start();
