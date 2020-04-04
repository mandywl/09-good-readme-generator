const axios = require("axios");
const api = {
  async getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    const config = {
      headers: {'Authorization': 'token c717da2355d131275e4a8d282d00516410176e61'}
    }
    console.log("queryUrl is ",  queryUrl);
    //return await axios.get(queryUrl, config); 
    return axios.get(queryUrl, config).then(res => {
      return res;
    })
  }
};

module.exports = api;
