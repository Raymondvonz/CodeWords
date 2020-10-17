
var pressed;
var colors = [];
var d = random();
 

 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,1,255);
  
  colors = [
    [255, 0, 255],
    [255, 110, 0],
    [255, 0, 0],
    [0, 255, 255],
    [0, 255, 0],
    [255, 255, 0],
    [0, 2, 0]
  ];
}
 
function draw() {
  noStroke();
  if(pressed === true){
    var randomIndex = parseInt(random(colors.length), 10);

    var randomSize = random(200);
 
    fill(colors[randomIndex]);
    ellipse(random(width),random(height),randomSize,randomSize);
     arc(random(width), random(height), randomSize,randomSize, PI, TWO_PI);
    rect(random(width), random(height), randomSize,randomSize);
 stroke(colors[randomIndex]);
 strokeWeight( random(width/200));
 line(random(width),random(height),random(height),random(width));
  }
  pressed = false;
}
 
function keyPressed(){
  pressed = true;
}
