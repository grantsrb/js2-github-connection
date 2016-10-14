var apiKey = require("./../.env").apiKey;

function ApiCall() {
}

function repoInfo(url, displayFxn, clearFxn, userName) {
  $.get(url).then(function(response) {
    clearFxn();
    for(var i = 0; i < response.length; i++) {
      var date = response[i].created_at;
      var projName = response[i].name;
      var description = response[i].description;
      displayFxn(userName, projName, description, date);
    }
  }).fail(function(response) {
    console.log(JSON.stringify(response));
  });
}

ApiCall.prototype.userInfo = function(userName, displayFxn, clearFxn, invalidFxn) {
  var url = 'https://api.github.com/users/' + userName;
  var urlKeyExists = (apiKey != null);
  if(urlKeyExists) {
    console.log("Added");
    url = url + '?access_token=' + apiKey;
  }
  $.get(url).then(function(response) {
    url = response.repos_url;
    if(urlKeyExists) {
      console.log("Added");
      url = url + '?access_token=' + apiKey;
    }
    var name = response.name;
    if (name == null)
      name = userName;
    repoInfo(url, displayFxn, clearFxn, name);
  }).fail(function(response) {
    invalidFxn(userName);
  });
}

exports.apiCallModule = ApiCall;
