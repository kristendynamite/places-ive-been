//business logic
function information(place, date, see, recommend) {
  this.place = place;
  this.date = date;
  this.see = see;
  this.recommend = recommend;
}

//user interface logic

$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedSee = $("input#new-see").val();
    var inputtedRecommend = $("input#new-recommend").val();

    var newInformation = new Information(inputtedPlace, inputtedDate, inputtedSee, inputtedRecommend);

    $("ul#hidden").append("<li><span class='information'>" + newInformation + "</span></li>");

    $("input#new-place").val("");
    $("input#new-date").val("");
    $("input#new-see").val("");
    $("input#new-recommend").val("");
  });
});
