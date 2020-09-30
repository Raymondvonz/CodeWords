/* 
p5js Paragraph layout with paragraph split and line-by-line 
text-to-points function and parametric margins/space settings.
by k.donnachie, for codeWords, 2020
*/
var font;
var points1=[];
var margin=50;
var topmargin = 50;
//insert your text into para variable, between single quote marks
//don’t let it break in your editor (make it stay purple)
//escape your other quote marks if necessary with backslash.
var para = 'IT IS WORTHLESS, he entered his opening salvo of this particular day into the electrosphere. Then he backspaced over the word WORTHLESS and typed in DATA. By the time he was finished with his first line, it read IT IS DATA THAT WORRIES ME.';
var words = para.split(' ');
var wx, wy;
var typesize = 60;
var spacesize = 17; //width of space between letters
var linesize = 75; //height between lines
function preload() {
  font = loadFont('data/Eckmannpsych.otf');   // this file must exist
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(typesize);
  strokeWeight(2); //point size (usually 1 or 2)
  //stroke(0); //point colour
  //noLoop();
  
}
function draw(){
  background(255);
  fill (0, 50); 
  wx = margin;
  wy = 400;
  //frameCount = 0;
  for (let w=0; w<words.length;w++){ 
      if (wx+textWidth(words[w])<=width-margin){ //if the word fits, set the word
        points1 = font.textToPoints(words[w], wx, wy+50, typesize, 0.9);
        noStroke();
//insert timing delay here if you like…
if (frameCount>3 * w){
          text(words[w], wx, wy+90); //toggle off after debug...
          for (let i=0; i <points1.length; i++){
            stroke(255,0,0);
            //point(points1[i].x, points1[i].y);
          }
}
        wx+=textWidth(words[w])+spacesize;
      }
      else { //if it doesn't fit, return to the next line
        wx=margin;
        wy+=linesize;
        w--;
      }
  } 
}
