let guessing
let inputguess
let attempts = 3
let buttonStoryClicked
let hiddenWord;
let myWordList;
const WORDS = [
    "intentions","nationality", "watermelon","cabybara", "notebook","honeymelon",
    "bumblebee", "chimpanzee","hippopotamus" 
    ];
function setup() {
    createCanvas(1000,700);
    background("skyblue");
    print("the hidden is: " + hiddenWord);


    inputguess= createInput("guess");
    inputguess.position(220, 350);

    guessing = createButton("Guess");
    guessing.position(400, 350);
    guessing.mousePressed(buttonStoryClicked)
    
}

function draw() {
    
}