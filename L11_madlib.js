// write your codes herelet inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace;
let btnGenStory
let storyText, storyTemplate;

function setup(){
    createCanvas(600,600);
    inputNoun = createInput("e.g. goodness");
    inputNoun.position(200, 100);

    inputVerb = createInput("e.g. swim");
    inputVerb.position(200,150);

    inputAdjective = createInput("e.g. happy");
    inputAdjective.position(200, 200);

    inputAdverb = createInput("e.g. happily");
    inputAdverb.position(200, 250);

    inputPlace = createInput("e.g. Ang Mo Kio");
    inputPlace.position (200, 300);

    btnGenStory = createButton("Generate Story");
    btnGenStory.position(200, 350);
    btnGenStory.mousePressed(buttonStoryClicked)

    storyTemplate = ["The {adjective} {noun} went {verb} at{place}.",
        "once upen time, {noun} went to go {verb} with his {adverb} at {place}"
    ];

    ranstory = random(storyTemplate);

    // storyText = ranstory.replace("{noun}", "dog")
    // console.log(storyText);
}

function draw(){
    background("maroon");

    push();
    fill("orange");
    textSize(18);
    textAlign(LEFT, TOP);
    textFont("cosmic san")
    text("Noun:", 50, 100);
    text("Verb:", 50, 150);
    text("Adjective:", 50, 200);
    text("Adverb:", 50, 250);
    text("Place:", 50, 300);
    text(storyText, 50, 450);
    pop();
}

function buttonStoryClicked(){
    // console.log("Tytus is GAY");
    // console.log(inputNoun.value());
    //  console.log(storyText);

     ranstory = random(storyTemplate);


    storyText = ranstory.replace("{noun}", inputNoun.value());
    storyText = storyText.replace("{verb}", inputVerb.value());
    storyText = storyText.replace("{adjective}", inputAdjective.value());
    storyText = storyText.replace("{adverb}", inputAdverb.value());
    storyText = storyText.replace("{place}", inputPlace.value());
    
    console.log(storyText);
}
