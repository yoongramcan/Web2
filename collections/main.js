function callback(data) {
  console.log(data)

//2. CALL THE FUNCTION OR LOOP IT	
	for(var i = 0; i < data.length; i++) {
	    additem(data[i]);
	  }
//ADDING FILTER	  
	 var myCollection = $(".box").collection({
	    filters: {
			 
	      "genre": "[data-genre]",
	      "year": "[data-year]",
			"title": "[data-title]"
	    },
	 })

//ADD IN FILTER ACTION TO BUTTON / Click Handler
	 $("#all").on("click",function(e) {
	 	 myCollection.filtered("genre","");
		 myCollection.filtered("year","");
	 });
	 
    $("#genre li").on("click",function(e) { 
		 var genreText = $(this).text();
        myCollection.filtered("genre",genreText);
    }); 
	 
    $("#year li").on("click",function(e) { 
		 var yearText = $(this).text();
        myCollection.filtered("year",yearText);
    });
	 
	 $(".overlay").on("click",function(e) {
	     hideModal();
	 });
	 
    $("#search").on("change keyup",function(e) {
        myCollection.filtered("title", $(this).val());
    });
}



/************************************************/

//1. CREATE ITEMS (ADD THIS STUFFS TO HTML)
function additem(item) { //create a function to access to live data/spreadsheets
var title = item.Name //I created this variable
var image = item.Images //I created this variable

// below is the HTML that is created in the cloud
var $wrapper = $(".boxwrapper"); //this is already exist

var $box = $("<div class='box'>"); //creating this new class in HTML
	
//CREATE FILTER TO BUTTONS
	$box.attr("data-genre",item.Genres) 
	$box.attr("data-year",item.Year)
	$box.attr("data-title",item.Name)

var $img = $("<img>").attr("src",image); //use "" when it's a string
var $titleBox = $("<div class='titleBox'>"); //this div need to wrap around Movie Name
var $caption = $("<p>").text(title); //don't need to use "" if it's the variable

$box.append($img).append($titleBox)
  $titleBox.append($caption);

$wrapper.append($box);


//MODEL CLICK HANDLER
$box.on("click",function(e) {
    showModal(item);
});


}






/*******************************************************/

//ADD MODAL BOX
//Modal or the popup box with details)//
//show model and overlay

function showModal(item) {
   $(".modal").empty();
	
	var title = item.Name //I created this variable
	var image = item.Images //I created this variable
	var year = item.Year
	var description = item.Description //I created this variable

//telling the browser what to do when click on the item
   var $h1 = $("<h1>").text(title);
   var $img = $("<img>").attr("src",image);
	var $h2 = $("<h2>").text(year);
   var $p = $("<p>").text(description);

   $(".modal").append($h1,$img,$h2,$p);

   $(".overlay").show();
   $(".modal").show();
	

}

//hide model and overlay
function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}





/*******************************************************/
Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1sdjHtT1GQCaSJ5NJ6PVKxvFyybQTFkjJNU9B2d5uOd0/pubhtml",
                 callback: callback,
                 simpleSheet: true } )



