let Xpos;
let speed;

function setup() {
    createCanvas(500,500);
    texxtAlign(CENTER, CENTER);
    textSize(48);
    xpos = width/2
    speed = 2;
}

function draw(){
    background("lightgray");
    Text("bouncer!!!", xpos, height/2);
    xos = xpos + speed;

    if (Xpos > width){
        speed = speed * -1;
    }
    
    if (Xpos < 0){
        speed = speed *-1;
    }
}