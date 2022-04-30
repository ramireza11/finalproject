let eyesImg;


function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
  rectMode(CENTER);
  

}

function preload(){
  eyesImg = loadImage('assets/eyefinal.png');
}

function draw() {
  background(10, 20, 30);

  //image(eyesImg, 30, 30 ,30 , 30);

  noFill();
  stroke(255);

  translate(200, 200);

  for (var i = 0; i < 200; i++) {
    push();
    fill(106, 13, 173);
    rotate(sin(frameCount + i * 3) * 100);

    rect(0, 0, 600 - i * 3, 600 - i *3, 200 - i);

    pop();

  }
  image(eyesImg, -130, -80 ,280 , 200);

}
