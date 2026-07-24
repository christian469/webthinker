// write your codes here
function setup() {
    createCanvas(600, 600)
    background("skyblue");
    noLoop();
}

function draw() {
    // print(width);
    // print(height);
let diameter = 50;
let circley = 50;
let count = 1;
for ( let red = 0; red < 256; red += 35 ) {
  fill(red)
  circle(count*50, circley, diameter);
  count = count + 1;
}
    }
