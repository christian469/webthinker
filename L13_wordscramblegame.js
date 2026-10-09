let hiddenWord;
const WORDS = [
    "intentions","nationality", "watermelon","cabybara", "notebook","honeymelon",
    "bumblebee", "chimpanzee","hippopotamus" 
    ];
function setup() {
    createCanvas(1000,700);
    background("skyblue");

    rescrambleButton = createButton("rescramble");
    rescrambleButton.postion(270, 500);
}

function draw() {
    fill("black");
    textSize(34);
    textAlign(CENTER, CENTER);
    text("word scramble game",   width/2, 75);
    text("Random word: Notebook", width/2, 205);

    textSize(28);
    text("score")
}