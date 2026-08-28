// // let xpos;
// // let speed;

// // function setup() {
// //     createCanvas(600,600);
// //     textAlign(CENTER, CENTER);
// //     textSize(48);
// //     xpos = width/2
// //     speed = 2;
// // }

// // function draw(){
// //     background("lightgray");
// //     text("Bounce!", xpos, height/2);
// //     xpos = xpos + speed;

// //     if (xpos > width){
// //         speed = speed * -1;
// //     }
    
// //     if (xpos < 0){
// //         speed = speed *-1;
// //     }
// // }

// function setup() {
//     createCanvas(400, 200);
//     background("skyblue");
//     textSize(32);
//     textAlign(CENTER,CENTER);
// }

// function draw() {
//     background("skyblue");

//     let xhour = nf( hour(), 2 );
//     let xminute =nf( minute(), 2);
//     let xsecond = nf( second(), 2);
//     let timeString = xhour + ":" + xminute + ":" + xsecond;


//     text(timeString, width/2, height/2);
// }
let csecond, cminute, chour;
let ctime;
let interval;
let countdown;

let alarm;

function preload(){
    alarm = loadSound('assets/Lose.mp3')
}



function setup(){
    createCanvas(600,400);
    textSize(80);
    textFont("cosmic san")
    textAlign(CENTER, CENTER)
    countdown = 600;
}

function draw(){
    background('metallicgold');
    csecond = second();
    cminute = minute();
    chour = hour();
    ctime = nf(chour,2) + " : " + nf(cminute,2) + " : " + nf(csecond,2)
    text(ctime, width/ 2, height/ 2);
    text(countdown, width/2, height/2 +100)
}

function mousePressed(){
    interval = setInterval(updateCountdown, 1000);
}

function updateCountdown(){
    if (countdown > 0){
    countdown = countdown - 1;
    }
    else{
        clearInterval(interval);
        alarm.play();
    }
}