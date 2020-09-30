var sentence = 'It was once a stormy night';
        let words = sentence.split(' ');


        function setup() {
            createCanvas(windowWidth, windowHeight);
            background(0);
            textSize(32);
            textFont('Times');
            //noLoop();
        }
 //canvas Is loading 60 times per second

        function draw() {

            noStroke();
            fill(255);
            var extraSpace = 0;//The words have its own length , so it needs to be offset to the right 
           //  i MEANS THE FIRST LETTER OF THE sentence 

            for (let i = 0; i < words.length; i++) {
                // appearing over time...
                 //note that canvas Is loading 60 times per second which means if the first letter is 1 then when francount reaches and goes beyond 1*100 the first word get pirnted 

                if (frameCount > i * 100) {
                    var wordMarginLeft = 30 * i;  //The distance of each word is 30 // letters got print with the distance of 30 
 
                    if (i > 0) {
                        extraSpace = extraSpace + words[i - 1].length * 13; //we need to add extra space in letters and it's caculated by the length of the letters
                    }
                    fill(255);
                    text(words[i], wordMarginLeft + extraSpace, 20);
                }
            }
      
 
}

function writeText(i, letterX){
text(words[i], letterX, 50); // words each on separate line

}
