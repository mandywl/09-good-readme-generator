const axios = require("axios");
const api = {
  async getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    const config = {
      headers: {'Authorization': 'token 5315d6e7dbd9e492b047e052b50034516f3a19ec'}
    }
    console.log("queryUrl is ",  queryUrl);
    //return await axios.get(queryUrl, config); 
    return axios.get(queryUrl, config).then(res => {
      return res;
    })
  }
};

module.exports = api;
