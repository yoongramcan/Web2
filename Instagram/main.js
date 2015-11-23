var images = null;

function drawImages(data) 
{console.log(data) 
	images = data;
	
	//below is the images that will be called 5 times
	/*addImage(images.data[0].images.thumbnail.url);
	addImage(images.data[1].images.thumbnail.url);
	addImage(images.data[2].images.thumbnail.url);
	addImage(images.data[3].images.thumbnail.url);
	addImage(images.data[4].images.thumbnail.url); */
	
	//below is the loop
	for(var i = 0; i < images.data.length; i++) {
		addImage(images.data[i]); //this part is from the function call above
	}
}

function addImage(item){
	var url = item.images.thumbnail.url;
	var likes = item.likes.count;
	var username = item.user.username;
	
	var $container = $(".container");
	var $img = $("<img>").attr("src",url);
	var $likes = $("<p>").text(likes);
	var $usename = $("<p>").text(username);
	
	$container.append($img).append($likes).append($username);
}

