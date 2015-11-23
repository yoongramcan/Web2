$(".scroller").scrollFlight();

var video = $("#underwater")[0];
video.currentTime=10
video.playbackRate = 0.4;
video.play()


	$(".title").on("arrived",function() {
	  $(this).addClass("arrived");
	});

	$(".quote").on("arrived",function() {
	  $(this).addClass("arrived");
	});



//Text Block 1
   $(".text-block-1").on("arriving", function(e) {
    $(this).addClass("text-block-arriving");
	});
   
	$(".text-block-1").on("departing", function(e) {
    $(this).addClass("text-block-departing");
	});

	$(".text-block-1").on("rearriving", function(e) {
    $(this).addClass("text-block-rearriving");
	});

//Text Block 2
   $(".text-block-2").on("arriving", function(e) {
    $(this).addClass("text-block-arriving");
	});
   
//Text Block 3
   $(".text-block-3").on("arriving", function(e) {
    $(this).addClass("text-block-arriving");
	});
   
	$(".text-block-3").on("departing", function(e) {
    $(this).addClass("text-block-departing");
	});

	$(".text-block-3").on("rearriving", function(e) {
    $(this).addClass("text-block-rearriving");
	});

//Text Block 4
   $(".text-block-4").on("arriving", function(e) {
    $(this).addClass("text-block-arriving");
	});
	
//Text Block 5
   $(".text-block-5").on("arriving", function(e) {
    $(this).addClass("text-block-arriving");
	});
	
	


//Map
	$("#page5").scrollFlight();
	$("#page5").on("update",function(e, size) {
	   console.log(size);
	  $(".map").css({transform: "scale(" + (1 + size / 1) + ")" });
	});
	
	
	
	
	
	
	
	
	
	

