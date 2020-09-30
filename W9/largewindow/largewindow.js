var frame2;
        var xoff = 0.7;
        var yoff = 0.8;

        function setup() {
            createCanvas(windowWidth, windowHeight);
            frame2 = {
                x: random(width / 2),
                y: random(height / 2),
                fill: 'blue',
                width: 300,
                height: 150,
                radiu: 20,
               
            };
        }

        function draw() {
            background(255);
            noStroke();
            fill(frame2.fill);
            rect(frame2.x - 15, frame2.y - 30, frame2.width, frame2.height, frame2.radiu);
            fill(255);
            textSize(15);
            text("WELL,YEAH ABE-BABES,\nWE’RE ALL HOME NOW!\nHOME ALONE!\nTOUCH ME YOU DIE!", frame2.x, frame2.y );

            if (mouseX > frame2.x && mouseX < frame2.x + frame2.width && mouseY > frame2.y&& mouseY < frame2.y + frame2.height) {
                frame2.width += 1;
                frame2.height += 1;
                frame2.fill = "black";
            } else {
                frame2.fill = "blue";
                frame2.x += xoff;
                frame2.y += yoff;
            }

            if (frame2.x <0 || frame2.x > width - frame2.width) {
                xoff = -xoff;
            }

            if (frame2.y < 0 || frame2.y > height - frame2.height) {
                yoff = -yoff;
            }
        }
         
         
