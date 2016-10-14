var ApiCall = require("./../js/api-call.js").apiCallModule;

var displayUserInfo = function(projName, projDescription, date) {
  $("#output").append("<li><strong>" + projName + "</strong></li><ul><li>Description: <em>" + projDescription + "</em></li><li>Date Created: <em>" + moment(date).format("MM/DD/YYYY") + "</em></li></ul>");
}

var clearUserInfo = function() {
  $("#output").empty();
}

var invalidInput = function(userName) {
  $("#output").empty();
  $("#output-name").text("That username doesn't seem to exist :(");
}

$(function() {
  $("#user-form").submit(function(event){
    event.preventDefault();
    var userName = $("#user-name").val();
    $("#output-name").text(userName + " page 1 repos:")
    var apiCall = new ApiCall();
    apiCall.userInfo(userName, displayUserInfo, clearUserInfo, invalidInput);
  });
});
