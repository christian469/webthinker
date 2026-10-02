// write your codes here
let guessing
let inputguess
let attempts = 3
let hintWord = "S _ _ _ _"

let myWordList;
let hiddenWord;

function setup(){
    // createCanvas(800,700);
    // background("lightgray");
    myWordList +["green", "black", "light", "watch", "apple", "round", "short", "shirt", "cover", "power"]



    inputguess= createInput("guess");
    inputguess.position(220, 350);

    guessing = createButton("Guess");
    guessing.position(400, 350);
    guessing.mousePressed(buttonStoryClicked)
    



}

function draw(){
    background("lightgray");
    textAlign(CENTER, CENTER);
    textSize(50);
    text("Guess the hidden word", width/2, height/2-160);
    text("Attempts:" + attempts, width/2, height/2-100);
    text("Hints:"+ hintWord, width/2, height/2-40);
}

