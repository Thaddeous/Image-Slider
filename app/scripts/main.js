function Slider(photos, options){
	this.photos = photos;
	this.options = options;
}

var Slideshow = new Slider([
	"images/mountain.jpg",
    "images/city.jpg",
    "images/rhino.jpg",
    "images/girl.jpg",
    "images/wizard.jpg",
	],{ delay: 3000,
		target: $(".slider")
	  });


var Slider = function (array){
	if(!$.isArray(array)){
	
	} else { 
 		throw new Error ("Not an array");
	}
}


// function Slider(){
// 	$("#1").fadeIn(500);
// 	$("#1").show(slow, 500).fadeOut(500);

// 	var sliderCount = $(".slider img").length();
// 	var count = 2;

// setInterval(function(){
// 	$(".slider #" + count).fadeIn(500);
// 	$(".slider #" + count).show(fast, 500).fadeOut(500);

// 	if (count == sliderCount){
// 		count = 1;	
// 	}
// 	else
// 	{
// 		count = count + 1;
// 	}
//   }, 1500;
// }