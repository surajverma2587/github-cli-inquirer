const axios = require("axios");
const { printTable } = require("console-table-printer");

const { transformUserInfo, transformRepositories } = require("./transformers");

const displayUserInfo = async (username) => {
  try {
    const url = `https://api.github.com/users/${username}`;

    const { data } = await axios.get(url);

    const userInfo = transformUserInfo(data);

    console.table(userInfo);

    return true;
  } catch (error) {
    console.log(`[ERROR]: Invalid username | ${error.message}`);
    return false;
  }
};

const listAllRepositories = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;

  const { data } = await axios.get(url);

  const repos = transformRepositories(data);

  printTable(repos);
};

module.exports = {
  displayUserInfo,
  listAllRepositories,
};
