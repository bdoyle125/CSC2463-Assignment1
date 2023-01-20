function setup() {
    // Creates a canvas for the sketch
    createCanvas(200, 100);
  }
  
  function draw() {
    // Makes the background black
    background("black");
    
    // Applies to all shapes
    noStroke();
    
    // Yellow Pac-Man
    fill(255,255,0);
    arc(50,50,80,80,5*PI/4,3*PI/4);
    
    // Red Ghost Body
    fill(255,0,0);
    rect(105,45,80,45);
    ellipse(145,45,80,70);
    
    // Red Ghost Outer Eyes
    fill(255,255,255);
    ellipse(125,50,25,25);
    ellipse(165,50,25,25);
    
    // Red Ghost Inner Eyes
    fill(0,0,225);
    ellipse(125,50,15,15);
    ellipse(165,50,15,15); 
}