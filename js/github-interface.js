var ApiCall = require("./../js/api-call.js").apiCallModule;

var displayUserInfo = function(projName, projDescription) {
  $("#output").append("<li><strong>" + projName + "</strong></li><ul><li><em>" + projDescription + "</em></li></ul>");
}

var clearUserInfo = function() {
  $("#output").empty();
}

$(function() {
  $("#user-form").submit(function(event){
    event.preventDefault();
    var userName = $("#user-name").val();
    $("#output-name").text(userName + " page 1 repos:")
    var apiCall = new ApiCall();
    apiCall.userInfo(userName, displayUserInfo, clearUserInfo);
  });
});
