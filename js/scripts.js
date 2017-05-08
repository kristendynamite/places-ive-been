//business logic
function Information(place, date, see, recommend) {
  this.place = place;
  this.date = date;
  this.see = see;
  this.recommend = recommend;
}

//user interface logic

$(function() {
  $("form#form-information").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedSee = $("input#new-see").val();
    var inputtedRecommend = $("input#new-recommend").val();

    var newInformation = new Information(inputtedPlace, inputtedDate, inputtedSee, inputtedRecommend);

    $("ul#hidden").append("<li><span class='Information'>" + newInformation.place + "</span></li>");

    $(".Information").last().click(function() {
      $("#show-hidden").show();
      $("#show-hidden h3").text(newInformation.place);
      $(".date").text(newInformation.date);
      $(".see").text(newInformation.see);
      $(".recommend").text(newInformation.recommend);
    });

    $("input#new-place").val("");
    $("input#new-date").val("");
    $("input#new-see").val("");
    $("input#new-recommend").val("");
  });
});
