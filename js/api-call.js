var apiKey = require("./../.env").apiKey;

function ApiCall() {
}

function repoInfo(url, displayFxn, clearFxn) {
  $.get(url).then(function(response) {
    clearFxn();
    for(var i = 0; i < response.length; i++) {
      var date = response[i].created_at;
      date = date.substring(0,10);
      var projName = response[i].name;
      var description = response[i].description;
      displayFxn(projName, description, date);
    }
  }).fail(function(response) {
    console.log(JSON.stringify(response));
  });
}

ApiCall.prototype.userInfo = function(userName, displayFxn, clearFxn, invalidFxn) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    var url = response.repos_url + '?access_token=' + apiKey;
    repoInfo(url, displayFxn, clearFxn);
  }).fail(function(response) {
    invalidFxn(userName);
  });
}

exports.apiCallModule = ApiCall;
