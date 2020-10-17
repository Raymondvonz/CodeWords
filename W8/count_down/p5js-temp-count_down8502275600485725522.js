function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); 
  frameRate(2);
}
 
function draw() {
  background(10);
  fill(255); 
  textSize(30); 
  countdown(10, 'Hello CodeWords!');
}
 
function countdown(number, message){
  var currentOutput;
  if(frameCount <= number + 1 ){
    currentOutput = number + 1 - frameCount % (number+2);
  }else{
    currentOutput = message;
  }
 
  text(currentOutput, width/2, height/2);
}
