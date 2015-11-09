$(".scroller").scrollFlight();

$(".title").on("arrived",function() {
  $(this).addClass("arrived");
});
$(".quote").on("arrived",function() {
  $(this).addClass("arrived");
});
$(".text_block").on("arrived",function() {
  $(this).addClass("text-block-arrived");
});

var video = $("#underwater")[0];
video.currentTime=10
video.play()
