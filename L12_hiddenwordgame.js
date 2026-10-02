// write your codes here
let guessing
let inputguess
let attempts = 3
let hintWord = "S _ _ _ _"
let buttonStoryClicked

let myWordList;
let hiddenWord;
let ultraExtraHint = ""

function setup(){
    createCanvas(800,700);
    // background("lightgray");
    myWordList +["green", "black", "light", "watch", "apple", "round", "short", "shirt", "cover", "power"]
    hiddenWord = random(myWordList);
    // hiddenWord = hiddenWord.toUpperCase();
    print("the hidden is: " + hiddenWord);


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


function generateHint(aWord) {
    print("word len =" + aWord.length);
    let partial = "_".repeat(aWord.length-1);
    print("the partial is " + partial);
    return aWord[0] + partial;
}


function checkGuess() {
    print("hello");
    let guess = guessInput.value();
    guess = guess.toUpperCase();
    if (guess === hideenWord) {
        messasge + "U win... GO OUTSIDE AND GET A LIFE"
        print(message);
    }
    else {
        attempts++; 
    }
}


function getCorrectLetters(inputValue, randomWord) {
    let matchedLetters = "";
    for(let aLetter of inputValue) {
        if (randomWord.includes(aLetter)) {
            if (!matchedLetters.includes(aLetter)){
                matchedLetters = ma
            }
        }
    }
}