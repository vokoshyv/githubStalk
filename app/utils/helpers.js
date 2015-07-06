var axios = require('axios');

function getRepos(username){
  return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
};

