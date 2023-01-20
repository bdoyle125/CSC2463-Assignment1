function setup() {
  // Creates a canvas for the sketch
  createCanvas(150, 150);
}

function draw() {
  // Makes the background white
  background("white");
  
  // Applies to all circles
  noStroke();
  
  // Top circle
  fill(255,0,0,75);
  ellipse(75,50,80,80);
  
  // Left Circle
  fill(0,0,255,75)
  ellipse(50,100,80,80);
  
  // Green Circle
  fill(0,255,0,75)
  ellipse(100,100,80,80);
}