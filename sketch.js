let eyesImg;
let eyes1Img;
let eyes2Img;
let eyes3Img;

let state = 'menu';
let cnv;
let angle = 0;

function preload(){
  eyesImg = loadImage('assets/eyefinal.png');
  eyes1Img = loadImage('assets/eyefinal1.1.png');
  eyes2Img = loadImage('assets/eyefinal1.2.png');
  eyes3Img = loadImage('assets/eyefinal1.3.png');
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.mouseClicked(function(){
    console.log('canvas clicked');
    state = 'page 1'
  });
  angleMode(DEGREES);
  rectMode(CENTER);
}


function draw(){

  switch (state){
    case 'menu':
     menu();
     cnv.mouseClicked(menuMouseClicked);
     break;
    case 'page 1':
     page1();
     cnv.mouseClicked(page1MouseClicked);
     break;
    case 'page 2':
      page2();
      cnv.mouseClicked(page2MouseClicked);
      break;
    case 'page 3':
      page3();
      cnv.mouseClicked(page3MouseClicked);
      break;
    case 'end':
      end();
      cnv.mouseClicked(endMouseClicked);
      break;
    default:
      break;
  }
}



function menu(){
  background(123,123,423);
  text('click anywhere to meet an illusion', 250, 250);
}



function menuMouseClicked(){
    console.log('canvas clicked on menu');
    state = 'page 1'
}



function page1(){
  background(123,123,423);
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
  image(eyes1Img, -270,-125, 200, 250)
}



function page1MouseClicked(){
  console.log('canvas clicked on page 1');
  state = 'page 2'
}




function page2(){
  background(50);
  noStroke();
  fill(255, 0, 0);
  ellipse(300, 300, 10, 10);

  for(let i = 15; i<5000; i+=15){
    push();
    translate(300, 300);
    rotate(i+ angle * 80);
    noFill();
    stroke(20, i * 100, i -100);
    ellipse(0, 0, i + 20, i);
    pop();

    angle += 0.0003
  }
}



function page2MouseClicked(){
    console.log('canvas clicked on menu');
    state = 'page 3'
}



function page3(){
  background(10, 20, 30);
  noFill();

  translate(300, 300);
  for (var i = 0; i < 300; i ++){
  push();
  rotate(sin(frameCount + i) * 200);

  var r = map(sin(frameCount), -1, -1, 300, 555);
  var g = map(cos(frameCount / 2), -1, -1, 300, 555);
  var b = map(sin(frameCount / 4), -1, -1, 300, 555);

  stroke (r, g, b);
    rect(0, 0, 1100 - i * 500, 300 - i);

  pop();
  }

  fill(255, 0, 0);
  ellipse(0, 0, 10, 10);
}



function page3MouseClicked(){
    console.log('canvas clicked on menu');
    state = 'end'
}



function end(){
  background(123,123,423);
  text('fin', 250, 250);
}



function endMouseClicked(){
    console.log('canvas clicked on menu');
    state = 'menu'
}
