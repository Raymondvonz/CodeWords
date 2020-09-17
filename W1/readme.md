## Week 1

### A

After a briefly(long) introduction about the couse, we were invited to join a city tour in Minecraft. I have never played Mindcraft before and got completely lost 5 mins later. It was interesting to have a lecture in a gaming environment. Andy and Karen were talking about how reading can be changed in the digital worlds. However, not only reading but also learing is changing especially duing the global pandemic(COVID-19).


![Image of Minecraft](https://github.com/Raymondvonz/CodeWords/blob/master/W1/Pic1_Minecraft.PNG)


How COVID-19 has changed Education(learning and teaching) is another aspect we should think about. With the distinctive rise of e-learning, whereby teaching is undertaken remotely, education activities are transforming from traditional classrooms to the digital Worlds. 


> “I believe that the integration of information technology in education will be further accelerated and that online education will eventually become an integral component of school education,“ says Wang Tao, Vice President of Tencent Cloud and Vice President of Tencent Education.


[*Education during COVID-19 and beyond -United Nation*](https://www.un.org/development/desa/dspd/wp-content/uploads/sites/22/2020/08/sg_policy_brief_covid-19_and_education_august_2020.pdf)

How teaching can be more engaging and effective by taking advantage of the Online Worlds?
Is learning online as effective?

Now given the fact that we just had an Minecraft lecture...


### B

![Image of R](https://github.com/Raymondvonz/CodeWords/blob/master/W1/R.gif)

This is my first attempt of p5.js.

**MouseX MouseY function**

function setup() {
  createCanvas (400,400);
 }


function draw() { 
  fill(251,102,71);
  noStroke();
  rect (0,0,400,400);
  stroke(8,88,76);
  strokeWeight(2);
  line (278,200,400,400);
  fill(168,168,168);
  noStroke();
  ellipse (278,mouseY,200,200);
  noStroke();
  fill(8,88,76);
  rect (mouseX,0,278,400);
 }
 
[Play here](https://raymondvonz.github.io/CodeWords/W1/R_firstattempt/).
