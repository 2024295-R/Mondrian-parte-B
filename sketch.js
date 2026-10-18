function setup() {
  createCanvas(800, 784);
  background(240, 240, 240);
}

function draw() {
   fill(255, 0, 0);
  strokeWeight (8);
  quad( 0, 0, width/2.3, 0, width/2.3, height/2.3, 0, height/2.3);
  
  strokeWeight (10);
  line(x1 = width/2.3, y1 = 0, x2 = width/2.3, y2 = 784);
  stroke(0);
  
  strokeWeight (15);
  line(0, height/2.3, 800 ,height/2.3);

  strokeWeight (15);
  line(0, height/1.5, 800, height/1.5);

  fill(255, 230, 0);
  noStroke();
  quad(0, height/1.5, width/8.3, height/1.5, width/8.3, height, 0, height); 
  
  stroke(0);
  strokeWeight (8);
  line(width/8.3, height/1.5, width/8.3, 784);
  
  fill(60, 20, 200);
  noStroke();
  quad(width/2.3, 2*height/3.0, width/1.3, 2*height/3.0, width/1.3, height/1.05, width/2.3, height/1.05);
  
  stroke(0)
  strokeWeight (8);
  line(width/1.3, height/1.5, width/1.3, 784);

  stroke(0);
  strokeWeight (8);
  line(width/2.3, height/1.05, width/1.3, height/1.05);

  framerate(4);
  let x = random(45, 25);
  let y = random(45, 25);

  strokeWeight(7);
  point(x, y); 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
