// write your codes here
function setup() {
    createCanvas(600, 600)
    background("skyblue");
    noLoop();
}

function draw() {
    // print(width);
    // print(height);
    for (let i = 50; i < 5; i++){
        fill(i*2);
    }
}