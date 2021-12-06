const axios = require("axios");

const { transformUserInfo } = require("./transformers");

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

module.exports = {
  displayUserInfo,
};
