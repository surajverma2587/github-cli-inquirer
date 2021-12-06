const inquirer = require("inquirer");

const githubQuestion = {
  type: "input",
  message: "Enter a GitHub username",
  name: "githubUsername",
};

const generateActionChoices = (username) => {
  return [
    {
      name: `Display information about ${username}`,
      value: "aboutUser",
    },
    {
      name: `List all repositories for ${username}`,
      value: "allRepos",
    },
    {
      name: `List 10 recently created repositories for ${username}`,
      value: "recentlyCreated",
    },
    {
      name: `List 10 recently updated repositories for ${username}`,
      value: "recentlyUpdated",
    },
    {
      name: `List all followers of ${username}`,
      value: "allFollowers",
    },
    {
      name: "Find a repository by name",
      value: "findRepo",
    },
    {
      name: "Enter a different username",
      value: "differentUser",
    },
    {
      name: "Exit the app",
      value: "exit",
    },
  ];
};

const start = async () => {
  const { githubUsername } = await inquirer.prompt(githubQuestion);

  let inProgress = true;

  while (inProgress) {
    const actionQuestion = {
      type: "list",
      message: "Select an action:",
      name: "action",
      choices: generateActionChoices(githubUsername),
    };

    const { action } = await inquirer.prompt(actionQuestion);

    if (action === "aboutUser") {
      console.log("aboutUser");
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
      console.log("differentUser");
    }

    if (action === "exit") {
      inProgress = false;
      process.exit(0);
    }
  }
};

start();
