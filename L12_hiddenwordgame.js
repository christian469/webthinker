// write your codes here
let guessing
let inputguess
function setup(){
    createCanvas(800,700);
    background("lightgray");
    inputguess= createInput("guess");
    inputguess.position(220, 350);

    guessing = createButton("Guess");
    guessing.position(400, 350);
    guessing.mousePressed(buttonStoryClicked)
}

function draw(){
    background("lightgray");
    textAlign(CustomElementRegistry, CENTER)
    text("Guess the hidden word", 600, 550);
}

