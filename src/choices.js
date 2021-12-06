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

module.exports = {
  generateActionChoices,
};
