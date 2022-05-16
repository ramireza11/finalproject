
let state = 'menu';
let cnv;
let angle = 0;
var song;


function setup() {
  cnv = createCanvas(600, 600);
  cnv.mouseClicked(function(){
    console.log('canvas clicked');
    state = 'page 1'
  });
  angleMode(DEGREES);
  rectMode(CENTER);
  song = loadSound("assets/white noise.mp3", loaded);
  song.setVolume(0.05);
}


function loaded(){
  song.play();
}


function draw(){

  song.setVolume(0.05);

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
  background(20);
  fill(255);
  textSize(40);
  textFont('monospace', 30);
  text('Can You Get passed an Illusion?', 25, 140);
  textSize(20);
  textFont('serif', 20);
  text('I do not take any responsiblity', 10, 500);
  textSize(20);
  textFont('serif', 20);
  text('if you get hurt or seriously injuried', 10, 530);
  textFont('monospace', 30);
  text('Can You Get passed an Illusion', 25, 150);
  textSize(40);
  textFont('monospace', 30);
  text('Can You Get passed an Illusion?', 25, 160);
  textSize(40);
  textFont('monospace', 30);
  text('Can You Get passed an Illusion?', 25, 170);
  textSize(40);
  textFont('sans-serif', 20);
  text('Click Anywhere In the Screen to Continue to each illusion', 45, 320);

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

  translate(300, 300);

  for (var i = 0; i < 200; i++) {
    push();
    fill(106, 13, 173);
    rotate(sin(frameCount + i * 3) * 100);

    rect(0, 0, 800 - i * 4, 800 - i *4, 200 - i);

    pop();
  }
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
  background(20);
  fill(255);
  textFont('sans-serif', 30);
  text('Congrats On Completing', 140, 150);
  textFont('monospace', 20);
  text('Click On Screen To Go Back To The Main Menu', 50, 450);
  textFont('serif', 40);
  text('You Have Now Passed This Illusion', 10, 270);
  textFont('serif', 40);
  text('You Have Now Passed This Illusion', 10, 290);
  textFont('serif', 40);
  text('You Have Now Passed This Illusion', 10, 310);
  textFont('serif', 40);
  text('You Have Now Passed This Illusion', 10, 330);

}


function endMouseClicked(){
    console.log('canvas clicked on menu');
    state = 'menu'
}
