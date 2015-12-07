//Modal or the popup box with details)//
//show model with overlay
function showModal(item) {
   $(".modal").empty();

   var $h1 = $("<h1>").text(item.Name);
   var $img = $("<img>").attr("src",item.Image);
   var $p = $("<p>").text(item.Description);

   $(".modal").append($h1,$img,$p);

   $(".overlay").show();
   $(".modal").show();
}

//hide model with overlay
function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}



//Draw list view (Create the function to add items)//
function addItem(item) {
  var $li = $("<li>").addClass("item").addClass(item.Color.toLowerCase()); //Created this li abstractly to appear in the "empty ul" in the html later
  //Create li then add .item and add .Color .toLowerCase in class "item"
  $li.attr("data-category",item.Color); //Adding the class (item.Color) to the "data-category to match the "addClass(item.Color" above

//These are the HTML that is created to go in the li above
  var $h2 = $("<h2 class='name'>").text(item.Name);
  var $p = $("<p class='description'>").text(item.Description);

  $li.append($h2,$p); //addin all the li that we created above to the page and make it visible

  $li.on("click",function(e) {
      showModal(item);
  });

  $(".collection").append($li); //Add the li that was created above in the .colletion (in the empty ul in HTML)
};

function addItems(data) {
  for(var i=0;i<data.length;i++) {
    addItem(data[i]);
  }
}



//TableTop.js -- Get the data from Google Spreadsheet//
function callback(data) {

  addItems(data);

//Packery (motion animation plug in when filter items)
/*  var $container = $('.collection');
  $container.packery({
    itemSelector: '.item',
    gutter: 10,
  }); */

  var myCollection = $(".item").collection({
    filters: {
      "title": "h2",
      "category": "[data-category]"
    },

/* //Packery
    update: function() {
      $container.packery();
      setTimeout(function() { $container.packery()},600);
    },
    ordered: function() {
      $container.packery('reloadItems');
      console.log("Whoa");
    },
    hide: function($elem) { $elem.hide(); },
    show: function($elem) { $elem.fadeIn(500); }, */
  });

//Add in filter action
  $(".category").on("click",function(e) { //click handler means set up for the browser what to do
      var category = $(this).data("category"); //the browser is looking for the info in the HTML
      myCollection.filtered("category",category); //Filtering the info from the excellsheet

      $("#filter-bar button.category").removeClass("selected"); //highlight the selected button
      $(this).addClass("selected"); //highlight by adding a class from css

  });


  $(".order").on("click",function(e) {
      var order = $(this).data("order");
      $("#filter-bar button.category").removeClass("selected");
      $(this).addClass("selected");
      myCollection.ordered(order);
  });



  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });

  $(".overlay").on("click",function(e) {
      hideModal();
  });

}

  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1uve3-Viu9SlwqwBR3__BGc6b18uNmNEW1RppZVq0FWs/pubhtml?gid=0&single=true",
                   callback: callback,
                   simpleSheet: true } )
