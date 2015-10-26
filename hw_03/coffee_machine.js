$(".btn_2").on("click",function(e){
  $(".light_2").addClass("green");
  $(".light_1").removeClass("green");
  $(".welcome").addClass("welcome_on");
  $(".welcome").removeClass("black");
})
$(".btn_1").on("click",function(e){ 
  $(".light_1").addClass("green");
  $(".light_2").removeClass("green");
  $(".welcome").addClass("black");
  $(".welcome").removeClass("welcome_on");
})
$(".controller").on("click",function(e){
  $(".light_1").removeClass("green"); 
  $(".light_2").removeClass("green");
  $(".welcome").removeClass("welcome_on");
  $(".welcome").addClass("black");
})
$(".cup").on("click",function(e){
  $(".cup").addClass("cup_in");
  $(".cup_in").removeClass("cup_out");
})
$(".machine_insert").on("click",function(e){
  $(".coffee").addClass("pouring");
})


