function callback(data) {
  console.log(data)
	
	for(var i = 0; i < data.length; i++) {
	    additem(data[i]);
	  }
	
	/*additem(data[0])
	additem(data[1])
	additem(data[2])*/
}


function additem(item) { //create a function to access to live data/spreadsheets
var title = item.Name //I created this variable
var image = item.Images //I created this variable

// below is the HTML that is created in the cloud
var $wrapper = $(".boxwrapper"); //this is already exist

var $box = $("<div class='box'>"); //creating this new class in HTML

var $img = $("<img>").attr("src",image); //use "" when it's a string
var $titleBox = $("<div class='titleBox'>"); //this div need to wrap around Movie Name
var $caption = $("<p>").text(title); //don't need to use "" if it's the variable

$box.append($img).append($titleBox)
  $titleBox.append($caption);

$wrapper.append($box);




}

Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1sdjHtT1GQCaSJ5NJ6PVKxvFyybQTFkjJNU9B2d5uOd0/pubhtml",
                 callback: callback,
                 simpleSheet: true } )



