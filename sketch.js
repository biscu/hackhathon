var  bg;
var  tree;
var ball_on;
var bar_off;
var santa;
var xpos = 0;
var vol;




function setup() {
  
  bg = loadImage("bg.png");
  tree = loadImage("tree.png");
  ball_on = loadImage("ball_on.png");
  ball_off = loadImage("ball_off.png");
  santa = loadImage("santa.png");

  
  
  



	// Create the canvas
	createCanvas(windowWidth, windowHeight);

	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
	
	
	



}

function draw() {
  
  background(bg);
  s = "Shout to make Santa faster!!";
  fill(255,255,255);
  textSize(30);
  textFont("Helvetica");
  text(s, 150, 200, 300, 600); // Text wraps within text box
  
  
  
  //tree
  
  image(tree, width/2 - 200, 50 );

	//get the volume
	var volume = mic.getLevel();

	push();

	//Start with transformations
	//move to the center of the canvas

	translate(width / 2, height / 2);
	// Set the new size. Volume goes from 0 to 1.
	// You can remap it to any size you want.
	var minSize = 30;
	var maxSize = 200;
	var minSize2 = 30;
	var maxSize2 = 300;
	var minSize3 = 0;
	var maxSize3 = 10;
	var size = map(volume, 0, 3, minSize, maxSize);
	var size2 = map(volume, 0, 3, minSize2, maxSize2);
	var size3 = map(volume, 0, 3, minSize3, maxSize3);
	
	//draw ball white
	noStroke();
	fill(228,185,52);
	ellipse(-120, -100, size);
	
	//red balls
	noStroke();
	fill(193,72,72);
	ellipse(60, -100, size2);

	//draw ball white
	noStroke();
	fill(228,185,52);
	ellipse(-140, -20, size);
	
	//red balls
	noStroke();
	fill(193,72,72);
	ellipse(80, -20, size2);
	
	//draw ball white
	noStroke();
	fill(228,185,52);
	ellipse(100, 90, size);
	
	//red balls
	noStroke();
	fill(193,72,72);
	ellipse(-170, 90, size2);
	
	//draw ball white
	noStroke();
	fill(193,72,72);
	ellipse(140, 220, size);
	
	//red balls
	noStroke();
	fill(228,185,52);
	ellipse(-200, 220, size);
	
	
	

	

	//All transformation are now dropped and the coordinate system is resetted.
	pop();
	
	// increment x variable
  xpos = (xpos + 1) + 20*(size3);
 
  // if the circle moves off screen, reset it's position
  if(xpos > width)
  {
    xpos = 0;
  }
	
	// set the fill color
  fill(255, 0, 0);
	// set the ellipse mode
	translate(0,height/2);
  // draw a circle
	image(santa,xpos, 0);
	
}

//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

