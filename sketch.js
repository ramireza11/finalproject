let eyesImg;


function setup() {
  createCanvas(600, 600);

  angleMode(DEGREES);
  rectMode(CENTER);


}

function preload(){
  eyesImg = loadImage('assets/eyefinal.png');
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
  image(eyesImg, -130, -80 ,280 , 200);

}
