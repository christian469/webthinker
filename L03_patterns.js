function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
//  circle(75, 200, 100)
//  circle(225, 200, 100)
//  circle(375, 200, 100)
//  circle(525, 200, 100)
let diameter = 50;
let circley = 50;

// for( let count=1; count<6; count++) {
//   circle(count*50, circley, diameter);
//   circley = circley + 50;
// } 
  // Task 1: Colour Gradient
let count = 1;
for ( let red = 0; red < 256; red += 35 ) {
  fill(57, 57, 57)
}
  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}