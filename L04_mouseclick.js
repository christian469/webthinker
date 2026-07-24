// write your codes here
function setup() {
    createCanvas(200, 200)
    background(220);
    noLoop();
}

function draw() {
    fill(0, green, 0)
    circle(100,100, 50);
//     // print(width);
//     // print(height);
// let diameter = 50;
// let circley = 50;

// let count = 1;
// for ( let green = 100; green < 256; green += 35 ) {
//   fill(0, green, 0);
//   circle(count*50, circley, diameter);
//   count = count + 1;
//   circley += 50;
// }
}
function mouseReleased() {
    shapeColour = colour(random(255), random(255), random(255))
}
