var para = 'IT IS WORTHLESS, he entered his opening salvo of this particular day into the electrosphere. Then he backspaced over the word WORTHLESS and typed in DATA. By the time he was finished with his first line, it read IT IS DATA THAT WORRIES ME.';
var words = para.split(' ');
var font;
var wx, wy;
var margin = 50;
var spacesize = 17;
var typesize = 60;
var linesize = 75;

var frame2;
var xoff = 0.7;
var yoff = 0.8;

var frame3;
var xoff3 = 2;
var yoff3 = 2;

var frame;
var myText = "\nGOT BLUE BALLS, BUDDY? SAME OLD\nSAME OLD? FUCK THAT SHIT MAN....\nGO MONSTER!\n\nMONSTER IS THE MOST POTENT FORM\nOF DAMI- ANA EVER GROWN. AND WE\nGOT IT HERE IN CUM CITY! TAKE A TRIP\nTO CUM CITY AND WATCH YOUR LIFE\nTURN FROM SHITTY TO . . . WORSE!";
var text1 = "IT IS WORTHLESS.     ";
var text2 = "IT IS DATA THAT WORRIES ME.";
let words1 = text1.split(' ');
let words2 = text2.split(' ');
var song;

function preload() {
    song = loadSound('data/Torture.mp3');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
   // img = loadImage('WORTHLESS');
    frame = {
        x: width - 695,
        y: height - 450,
        fill: 'blue',
        width: 695,
        height: 450,
        radiu: 25
    };
    frame2 = {
        x: random(width / 2),
        y: random(height / 2),
        fill: 'blue',
        width: 300,
        height: 150,
        radiu: 20
    };
    
    frame3 = {
        x: random(width / 2),
        y: random(height / 2),
        fill: 'magenta',
        width: 500,
        height: 150,
        radiu: 20,
        myx: 0,
        myy:0
    };
    background(0);
    textFont("Helvetica");
}

function draw() {
    //text background
   // image(img, 50, 50);
    //fill(255, 255, 0);
    textSize(80);
    background(0, 255, 0);


    fill(frame.fill);

    wx = margin;
    wy = 400;


    var extraSpace = 0;
    for (let i = 0; i < words1.length; i++) {
        // appearing over time...
        if (frameCount > i * 100 && frameCount < words1.length * 100) {//frameCount
            var wordMarginLeft = 80 * i;
            if (i > 0) {
                extraSpace = extraSpace + words1[i - 1].length * 14;//
            }

            text(words1[i], 60 + wordMarginLeft + extraSpace, 100 + 20); // words each on separate line
        }
    }
    extraSpace = 0;
    for (let i = 0; i < words2.length; i++) {
        // appearing over time...
        if (frameCount > words1.length * 100 + i * 100) {
            var wordMarginLeft2 = 30 * i;
            if (i > 0) {
                extraSpace = extraSpace + words2[i - 1].length * 60;
            }
            //fill(255);
            text(words2[i], 60 + wordMarginLeft2 + extraSpace, 100 + 20); // words each on separate line
        }
    }
    /* 
    p5js Paragraph layout with paragraph split and line-by-line 
    text-to-points function and parametric margins/space settings.
    by k.donnachie, for codeWords, 2020
    */
    textSize(48);
    for (let w = 0; w < words.length; w++) {
        if (wx + textWidth(words[w]) <= width - margin) { //if the word fits, set the word
            // points1 = font.textToPoints(words[w], wx, wy + 50, typesize, 0.9);
            noStroke();
            //insert timing delay here if you like…
            if (frameCount > 30 * w) {
                text(words[w], wx, wy); //toggle off after debug...
            }
            wx += textWidth(words[w]) + spacesize;
        }
        else { //if it doesn't fit, return to the next line
            wx = margin;
            wy += linesize;
            w--;
        }
    }


    noStroke();
    rect(frame.x, frame.y, frame.width, frame.height, frame.radiu);

    //xxclose
    stroke(255, 0, 255);
    strokeWeight(32);
    line(frame.x + frame.width - 85, frame.y + 30, frame.x + frame.width - 40, frame.y + 70);
    line(frame.x + frame.width - 85, frame.y + 70, frame.x + frame.width - 40, frame.y + 30);
    //text
    textSize(30);
    fill(255, 0, 255);
    noStroke();
    text(myText, frame.x + 30, frame.y + 70);

    var dis = dist(frame.x + frame.width - 60, frame.y + 35, mouseX, mouseY);

    if (dis < 50) {
        frame.x = random(frame.width / 5, width - frame.width);
        frame.y = random(frame.height / 2, height - frame.height);
    }
    //mouse;
    ellipse(pmouseX, pmouseY, 100, 100);

    //moving window1
    fill(frame2.fill);
    rect(frame2.x - 20, frame2.y - 40, frame2.width, frame2.height, frame2.radiu);

    fill(frame3.fill);
    rect(frame3.x - 20, frame3.y - 40, frame3.width, frame3.height, frame3.radiu);
    fill(255, 255, 0);
    
    var si = frame2.width / 20;
    if (si>35) {
        si = 35;
    }
    textSize(si);
    text("WELL,YEAH ABE-BABES,\nWE’RE ALL HOME NOW!\nHOME ALONE!\nTOUCH ME YOU DIE!", frame2.x, frame2.y);

    if (mouseX > frame2.x && mouseX < frame2.x + frame2.width && mouseY > frame2.y && mouseY < frame2.y + frame2.height) {
        frame2.width += 1;
        frame2.height += 1;
        frame2.fill = "black";
    } else {
        frame2.fill = "blue";
        frame2.x += xoff;
        frame2.y += yoff;
    }

    if (frame2.x < 0 || frame2.x > width - frame2.width) {
        xoff =  -xoff;
    }

    if (frame2.y < 0 || frame2.y > height - frame2.height) {
        yoff = -yoff;
    }
    
    //moving window2
textSize(24);
    text("BREAKING NEWS!\nMACROWORLDMEDIA DECLARES WAR!\nPAY PER VIEW ON CHANNEL X!\nCHECK NOW FOR PRICES . . .", frame3.x, frame3.y);
    

    if (mouseX > frame3.x && mouseX < frame3.x + frame3.width && mouseY > frame3.y && mouseY < frame3.y + frame3.height) {

        frame3.myx = frame3.x;
        frame3.myy = frame3.y;
        frame3.x = 3;
        frame3.y = 30;
    } else {
        if (frame3.myx!=0) {
            frame3.x = frame3.myx;
            frame3.y = frame3.myy;
            frame3.myx = 0;
        }
  
        frame3.fill = "magenta";
        frame3.x += xoff3;
        frame3.y += yoff3;
    }

    if (frame3.x < 0 || frame3.x > width - frame3.width) {
        xoff3 = -xoff3;
    }

    if (frame3.y < 0 || frame3.y > height - frame3.height) {
        yoff3 = -yoff3;
    }


}

function mousePressed() {
    if (song.isPlaying()) {
        song.stop();
       // song.noLoop();
    }
    else {
       // song.loop();
        song.play();
    }
} 
