function callback(data) {
  console.log(data)
}

var $wrapper = $(".boxwrapper"); //this is already exist

var $box = $("<div class='box'>"); //creating this new class in HTML

var url = "images/image01.jpg";
var $img = $("<img>").attr("src",url);
var $titleBox = $("<div class='titleBox'>"); //this div need to wrap around Movie Name
var $caption = $("<p>").text("Movie Name");

$box.append($img).append($titleBox)
  $titleBox.append($caption);

$wrapper.append($box);




//  Tabletop.init( { key: //"https://docs.google.com/spreadsheets/u/1/d/1sdjHtT1GQCaSJ5NJ6PVKxvFyybQTFkjJNU9B2d5uOd0/pubhtml",
  //                 callback: callback,
    //               simpleSheet: true } )
