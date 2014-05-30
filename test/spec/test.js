/* global describe, it */
 describe("the functioning of the main slider()", function(){
 	
 	it("should return an array of at least one item", function(){
	 	
 		var largeArray = function (){
 			Slider(array.length)
 		}

		expect(array).to.haves.length.of.at.least(1);	
 		});

 	
 	it("should only accept an array for its images argument", function (){
 		
 		var brokenSlider = function () {
 			Slider("string")
 		}
 		
 		expect(brokenSlider).to.throw(Error);
 		});


 	it("should be a constructor with created instances", function (){
 		
 		expect(Slideshow).to.be.an.instanceof(Slider);
 		});
 })




