function setup() {
  // Creates a canvas for the sketch
  createCanvas(200, 100);
}

function draw() {
  // Makes the background a lime color
  background("lime");
  
  // Creates a white circle
  ellipse(50,50,80,80);

  // Creates a white box next to the white circle
  rect(110,10,80,80);
}