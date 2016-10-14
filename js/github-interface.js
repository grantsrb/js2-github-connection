var ApiCall = require("./../js/api-call.js").apiCallModule;

var displayUserInfo = function(projName, projDescription) {
  $("#output").append("<li>" + projName + "</li><ul><li>" + projDescription + "</li></ul>");
}

$(function() {
  $("#user-form").submit(function(event){
    event.preventDefault();
    var userName = $("#user-name").val();
    var apiCall = new ApiCall();
    apiCall.userInfo(userName, displayUserInfo);
  });
});
