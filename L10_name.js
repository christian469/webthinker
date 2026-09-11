let displayName;
let displayAge;

let inputName;
let inputAge;

let colorPicker;
let colorPicker2;


function setup(){
    createCanvas(600,400)
    inputName = createInput();
    inputName.position(300, height - 150);
    inputName.input(updateName);

     inputAge = createInput();
    inputAge.position(300, height - 100);
    inputAge.input(updateAge);

    colorPicker = createColorPicker("yellow");
   colorPicker.position(300, height - 50) 
    

}

function draw(){
    background(colorPicker.value())
    fill(colorPicker)
    rect(150,50,300,150,10);
    
    push();
    textSize(19);
    textAlign(LEFT,TOP);
    text("Enter your name:", 50, height- 150); 
    text("Enter your age", 50, height - 100);
    text("Choose a color:", 50, height - 50);

    pop();
    
    push()
    textSize(32);
    textAlign(CENTER,CENTER);
    text(displayName, width/2, height-300);
    text(displayAge, width/2, height-250);
    pop();
}


function updateName(){
    displayName = this.value();
}

function updateAge(){
    displayAge = this.value();
}