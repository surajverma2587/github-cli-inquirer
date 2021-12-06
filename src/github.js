const axios = require("axios");

const { transformUserInfo } = require("./transformers");

const displayUserInfo = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  const { data } = await axios.get(url);

  const userInfo = transformUserInfo(data);

  console.table(userInfo);
};

module.exports = {
  displayUserInfo,
};
