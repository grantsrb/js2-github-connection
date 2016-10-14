var apiKey = require("./../.env").apiKey;

function ApiCall() {
}

function repoInfo(url, displayFxn, clearFxn) {
  $.get(url).then(function(response) {
    clearFxn();
    for(var i = 0; i < response.length; i++) {
      var projName = response[i].name;
      var description = response[i].description;
      displayFxn(projName, description);
    }
  }).fail(function(response) {
    console.log(JSON.stringify(response));
  });
}

ApiCall.prototype.userInfo = function(userName, displayFxn, clearFxn) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    var url = response.repos_url + '?access_token=' + apiKey;
    repoInfo(url, displayFxn, clearFxn);
  }).fail(function(response) {
    console.log(response);
  });
}

exports.apiCallModule = ApiCall;
