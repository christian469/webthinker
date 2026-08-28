let Xpos;
let speed;

function setup() {
    createCanvas(600,600);
    textAlign(CENTER, CENTER);
    textSize(48);
    Xpos = width/2
    speed = 2;
}

function draw(){
    background("lightgray");
    Text("bouncer!!!", Xpos, height/2);
    xos = xpos + speed;

    if (Xpos > width){
        speed = speed * -1;
    }
    
    if (Xpos < 0){
        speed = speed *-1;
    }
}