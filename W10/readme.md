## Week 10 

### A
I cannot believe it's already week 10.

This week, we had a small presentations of our code-in-progress.I have been woriking with Celia coz we all have the typing effect involved in our final design. At first i have no clue how to make that happen until karen showed us a pice of her codes. In addition to that, I successfully figured out how to code the second window which is when mouse is getting close, the window grow bigger.

Here is the pseudo code

IF the mouse is outside the frame
THEN fill black & framewitdh+ 1
Else fill blue & bouncing 
IF Frame reaches the window width& height
THEN bounce back

Here is the code

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

![](https://github.com/Raymondvonz/CodeWords/blob/master/W10/Screen%20Shot%202020-10-06%20at%207.53.21%20pm.png)


[Play here](https://raymondvonz.github.io/CodeWords/W10/final/).
