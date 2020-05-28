var music
var flameSound
let skyImg;
let bImg;
let balloon;
let pImg;
let aero;
let aeros = [];

var x1 = 0;
var x2;
var scrollSpeed = 2;

function preload() {
  music = loadSound('bennyhill.mp3');
  flameSound = loadSound('flame.mp3');
  skyImg = loadImage('sky.jpg');
  bImg = loadImage('balloon.png');
  aImg = loadImage('aero.png');


}

function setup() {
  createCanvas(600, 500);
  
    x2 = width;


  flameSound.playMode('restart');


  balloon = new Balloon();
 aero = new Aero();

}
function keyPressed() {
  if (key == 'ArrowUp')   {
    balloon.jump();
    flameSound.play();
  } else 
    flameSound.stop();
  
 

}


function draw() {
   image(skyImg, x1, 0, width, height);
  image(skyImg, x2, 0, width, height);
  
  if(random(1)<0.008){
    aeros.push(new Aero());
  }
  for (let a of aeros) {
    a.move();
    a.show();
 if (balloon.hits(a)) {
   console.log('game over');
   noLoop();
 }
  
  

  
   
}
  
 
  
  balloon.show();
  aero.show();
  balloon.move();
  

}