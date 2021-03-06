const inquirer = require("inquirer");

const { githubQuestion } = require("./questions");
const {
  generateActionChoices,
  generateRepoActionChoices,
  generateRepoChoices,
} = require("./choices");
const {
  displayUserInfo,
  listAllRepositories,
  getAllRepos,
} = require("./github");

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
        await listAllRepositories(githubUsername);
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
        const findRepoQuestion = {
          type: "list",
          message: "How would you like to proceed?",
          name: "repoAction",
          choices: generateRepoActionChoices(githubUsername),
        };

        const { repoAction } = await inquirer.prompt(findRepoQuestion);

        if (repoAction === "byList") {
          const repos = await getAllRepos(githubUsername);
          const repoChoices = generateRepoChoices(repos);

          const selectRepoQuestion = {
            type: "list",
            message: `Select a repository for ${githubUsername}:`,
            name: "repoName",
            choices: repoChoices,
          };

          const { repoName } = await inquirer.prompt(selectRepoQuestion);

          console.log(repoName);
        }

        if (repoAction === "byName") {
          console.log("byName");
        }

        if (repoAction === "mainOptions") {
          inProgress = true;
        }
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
