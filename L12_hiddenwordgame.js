// write your codes here
let guessing
let inputguess
function setup(){
    createCanvas(800,700);
    background("lightgray");
    inputguess= createInput("guess");
    inputguess.position(220, 350);

    btnGenStory = createButton("Guess");
    btnGenStory.position(400, 350);
    btnGenStory.mousePressed(buttonStoryClicked)
}

function draw(){
    background("lightgray");

    text("Guess the hidden word", 600, 550);
}

