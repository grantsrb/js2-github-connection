var ApiCall = require("./../js/api-call.js").apiCallModule;

var displayUserInfo = function(userName, projName, projDescription, date, img) {
  $("#output-name").text(userName);
  $("#user-image").attr("src", img);
  $("#user-image").show();
  $("#pg1-repos").text("Page 1 repos:");
  $("#output").append("<li><strong>" + projName + "</strong></li>"+
    "<ul><li>Description: <em>" + projDescription + "</em></li>"+
    "<li>Date Created: <em>" + moment(date).format("MM/DD/YYYY") + "</em></li></ul>");
}

var clearUserInfo = function() {
  $("#output").empty();
}

var invalidInput = function(userName) {
  $("#user-image").hide();
  $("#pg1-repos").text("");
  $("#output").empty();
  $("#output-name").text("That username doesn't seem to exist :(");
}

$(function() {
  $("#user-form").submit(function(event){
    event.preventDefault();
    var userName = $("#user-name").val();
    var apiCall = new ApiCall();
    apiCall.userInfo(userName, displayUserInfo, clearUserInfo, invalidInput);
  });
});
