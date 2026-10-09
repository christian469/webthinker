let score = 0
let Streak = 0
let submitButton
let rescrambleButton
let hiddenWord;
const WORDS = [
    "intentions","nationality", "watermelon","cabybara", "notebook","honeymelon",
    "bumblebee", "chimpanzee","hippopotamus" 
    ];
function setup() {
    createCanvas(1000,700);
    background("skyblue");

    rescrambleButton = createButton("rescramble");
    rescrambleButton.postion(270, height/2-150);
    rescrambleButton.style("font-size", "20px");
    rescrambleButton.size(135.35)

    guessInput = createInput();
    guessInput.postion(430, height)

    submitButton = createButton("Submit");
    submitButton.postion(width/2+160, height/2-50);
    submitButton.style("font-size", "20px");
    submitButton.size(80,35);

    hiddenWord = pickNewWord();
    print("THE SECRET IS " + hiddenWord);
}
function shuffleWord(someWord) {
    let arrChars = someWord.split("");
    for (let i = arraySome.length-1; i > 0; i--) {
        let j = floor(random(i-1));
        let memory = arraySome[j];
        arraySome[j] = arraySome[i];
        arraySome = memory;
    }
    return arraySome.join("";
}
function pickNewWord(){
    hiddenWord = random(WORDS);
    hiddenWord = hiddenWord.toUpperCase();
    messedup = shuffleWord(hiddenWord);
    return hiddenWord;
}


function draw() {
    fill("black");
    textSize(34);
    textAlign(CENTER, CENTER);
    text("word scramble game",   width/2, 75);
    text("Random word: Notebook", width/2, 205);

    textSize(28);
    text("score: 0", width/2, height/2+80);
    text("Streak: 0 (max = 0)", width/2, height/2+120);
}