var frame;
var myText= "\nGOT BLUE BALLS, BUDDY? SAME OLD\nSAME OLD? FUCK THAT SHIT MAN....\nGO MONSTER!\n\nMONSTER IS THE MOST POTENT FORM\nOF DAMI- ANA EVER GROWN. AND WE\nGOT IT HERE IN CUM CITY! TAKE A TRIP\nTO CUM CITY AND WATCH YOUR LIFE\nTURN FROM SHITTY TO . . . WORSE!";


        function setup() {
            createCanvas(windowWidth, windowHeight);
            
            //textFont("Times");
            textFont("Arial");

            frame = {
                x: 0,
                y: 0,
                fill: 'blue',
                width: 695,
                height: 450,
                radiu: 40
            };

        }

        function draw() {

            background(0,255,0);
            fill(frame.fill);
            //window
            noStroke();
            rect(frame.x-15, frame.y-15, frame.width, frame.height, frame.radiu);

            //xxclose
            stroke(255,0,255);
            strokeWeight(32);
            line(frame.x + frame.width - 85, frame.y + 10, frame.x + frame.width - 40, frame.y + 60);
            line(frame.x + frame.width - 85, frame.y + 60, frame.x + frame.width - 40, frame.y + 10);
            //text
            textSize(30);
            fill(255,0,255);
            noStroke();
            text(myText,frame.x + 10, frame.y + 60);
            //text(' GOT BLUE BALLS, BUDDY ? \n ' +
                //'SAME OLD SAME OLD ? FUCK THAT \n ' +
                //'SHIT MAN....GO MONSTER!\n  \n' +
                //'MONSTER IS THE MOST POTENT \n ' +
                //'FORM OF DAMI - ANA EVER GROWN. \n' +
                //'AND WE GOT IT HERE IN CUM CITY! TAKE \n' +
                //'A TRIP  TO CUM CITY AND WATCH YOUR  \n' +
                //' LIFE TURN FROM SHITTY TO. . .WORSE!', frame.x + 10, frame.y + 60);
            //when mouse close(dis) to X then random generage a new frame(window)   
            var dis = dist(frame.x + frame.width - 60, frame.y + 35, mouseX, mouseY);
            
            if (dis < 50) {
                frame.x = random(frame.width/5, width - frame.width);
                frame.y = random(frame.height/2,height - frame.height);
            }
        }
 
