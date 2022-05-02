let eyesImg;
let eyes1Img;
let eyes2Img;
let eyes3Img;

function setup() {
  createCanvas(600, 600);

  angleMode(DEGREES);
  rectMode(CENTER);


}

function preload(){
  eyesImg = loadImage('assets/eyefinal.png');
  eyes1Img = loadImage('assets/eyefinal1.1.png');
  eyes2Img = loadImage('assets/eyefinal1.2.png');
  eyes3Img = loadImage('assets/eyefinal1.3.png');
}

function draw() {
  background(10, 20, 30);

  noFill();
  stroke(255);

  translate(270, 300);

  for (var i = 0; i < 200; i++) {
    push();
    fill(106, 13, 173);
    rotate(sin(frameCount + i * 3) * 100);

    rect(0, 0, 800 - i * 4, 800 - i *4, 200 - i);

    pop();

  }
  image(eyesImg, -130, -300 ,280 , 200);
  image(eyes3Img, -130, 100 ,280 , 200);
  image(eyes2Img, 120, -125, 200, 250);
  image(eyes1Img, -270,-125, 180, 250)
}
