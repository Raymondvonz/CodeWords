var frame;
        var myText = "\nGOT BLUE BALLS, BUDDY? SAME OLD\nSAME OLD? FUCK THAT SHIT MAN....\nGO MONSTER!\n\nMONSTER IS THE MOST POTENT FORM\nOF DAMI- ANA EVER GROWN. AND WE\nGOT IT HERE IN CUM CITY! TAKE A TRIP\nTO CUM CITY AND WATCH YOUR LIFE\nTURN FROM SHITTY TO . . . WORSE!";
        var text1 = "IT IS WORTHLESS.";
        var text2 = "IT IS DATA THAT WORRIES ME.";
        let words1 = text1.split(' ');
        let words2 = text2.split(' ');
        function setup() {
            createCanvas(windowWidth, windowHeight);
            img = loadImage('WORTHLESS');
            frame = {
                x: 0,
                y: 0,
                fill: 'blue',
                width: 695,
                height: 450,
                radiu: 40
            };

            background(0);
            //noStroke();

            textFont("Helvetica");
        }

        function draw() {
            //text background
            image(img, 50, 50);
            textSize(90);
            background(0, 255, 0);
            fill(255, 0, 255);

            fill(frame.fill);

            var extraSpace = 0;//单词不是一个字母  所以需要根据字母长度向右偏移
            for (let i = 0; i < words1.length; i++) {
                // appearing over time...
                if (frameCount > i * 100 && frameCount < words1.length*100) {//frameCount从1开始增加
                    var wordMarginLeft = 80 * i;  //每个单词的初始距离是30
                    if (i > 0) {
                        extraSpace = extraSpace + words1[i - 1].length * 14;//额外距离要不断递增   i-1代表前一个单词
                    }
                    //fill(255);
                    text(words1[i], 300 + wordMarginLeft + extraSpace, 400+20); // words each on separate line
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
                    text(words2[i], 300 + wordMarginLeft2 + extraSpace, 400 + 20); // words each on separate line
                }
            }


           // text(text2, 300, 400, 300, 800);
            noStroke();
            rect(frame.x - 15, frame.y - 15, frame.width, frame.height, frame.radiu);

            //xxclose
            stroke(255, 0, 255);
            strokeWeight(32);
            line(frame.x + frame.width - 85, frame.y + 10, frame.x + frame.width - 40, frame.y + 60);
            line(frame.x + frame.width - 85, frame.y + 60, frame.x + frame.width - 40, frame.y + 10);
            //text
            textSize(30);
            fill(255, 0, 255);
            noStroke();
            text(myText, frame.x + 10, frame.y + 60);
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
                frame.x = random(frame.width / 5, width - frame.width);
                frame.y = random(frame.height / 2, height - frame.height);


            }
            //mouse;
            ellipse(pmouseX, pmouseY, 100, 100);

        }
