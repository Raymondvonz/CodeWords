var song;

var x = 0;
var n = 10;
var r_big = 300;
var PI = 3.1415926535;
var thet = PI * 2 / n;
var jiao = 0;


function setup() {
    
    createCanvas(windowWidth,windowHeight);
    


    
}
function draw() {
    background(mouseX/2, mouseY/2, mouseY/2);
    fill(mouseY/4, mouseX/4, mouseY/4);
       noStroke();
    for(let i=0;i<n;i++){
        push();
        translate(r_big*(cos(thet*i))+width/2, r_big*(sin(thet*i))+height/2);
        rotate(thet*i+HALF_PI+jiao);
        arc(0, 0, r_big*1.5, r_big, PI, TWO_PI);
        pop();
    }  
    jiao -= 0.01;
}
