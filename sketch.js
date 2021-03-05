var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
  hr= hour();
  mn= minute();
   sc= second();
  scAngle=map(sc,0,60,0,360);
mnAngle=map(mn,0,60,0,360);
hrAngle=map(hr,0,0,60,0,360);
}

function draw() {

 angleMode(DEGREES);
 
  background(255,255,255);  
  push();
  rotate(scAngle);
  stroke(255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  translate(hr,mn,sc);
 
strokeWeight(7);
stroke(255);

  drawSprites();
}