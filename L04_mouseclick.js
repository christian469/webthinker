// write your codes here
shapeColor = 0;
function setup() {
    createCanvas(600, 600)
    background(220);
    // noLoop();
}

// function draw() {
//     fill(shapeColor);
//     circle(300, 300, 250);
// //     // print(width);
// //     // print(height);
// // let diameter = 50;
// // let circley = 50;

// // let count = 1;
// // for ( let green = 100; green < 256; green += 35 ) {
// //   fill(0, green, 0);
// //   circle(count*50, circley, diameter);
// //   count = count + 1;
// //   circley += 50;
// // }
// }
// function mousePressed() {
//     shapeColor = color(random(255), random(255), random(255));
// }

// function mouseReleased(){
//     shapeColor = color(255, 255, 255);
// }


function mouseMoved(){
    ellipse(mouseX, mouseY, 10, 10);
}
function MouseDragged(){
    ellipse(mouseX, mouseY, 20, 20);
}