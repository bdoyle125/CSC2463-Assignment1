function setup() {
  // Creates a canvas for the sketch
  createCanvas(150, 150);
}

function draw() {
  // Makes the background white
  background("darkblue");
  
  // Makes all shapes have a white background and a stroke weight of 2
  stroke('white');
  strokeWeight(2);

  // Green Circle 
  fill(0,125,0);
  ellipse(75,75,80,80);
 
  // Selects the color of the star
  fill(255,0,0);
  
  // Begins drawing the star
  beginShape();
  
  // The tip
  vertex(75,32.5);
  
  // Right shoulder
  vertex(85,60);
  
  // Right arm
  vertex(115,60);
  
  // Right side
  vertex(92.5,75);
  
  // Right leg
  vertex(100,110);
  
  // Tail
  vertex(75,90);
  
  // Left leg
  vertex(50,110)
  
  // Left side
  vertex(57.5,75);
  
  // Left arm
  vertex(35,60);
  
  // Left shoulder
  vertex(65,60);
  
  // The tip
  vertex(75,32.5);

  // Finishes the star
  endShape();
}