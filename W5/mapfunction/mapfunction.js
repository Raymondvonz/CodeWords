var col = 0;

function setup() {
 
  createCanvas(windowWidth,windowHeight);


}




function draw() {
  r = map(mouseX,0,windowWidth,0,255);
  g = map(mouseX,0,windowWidth,255,0);
  b = map(mouseY,0,windowWidth,255,0);
  background(r,g,b);
  fill(r,g,b);
  ellipse(mouseX,mouseY,1000);
  //translate(240, 0, 0);
  //push();
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //torus(400, 40);
  //pop();
 
 
  

}
