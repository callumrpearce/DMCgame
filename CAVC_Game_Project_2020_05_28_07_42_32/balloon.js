class Balloon {
  constructor() {
    this.r = 80;
    this.x = 250 ;
    this.y = height / 2;
    this.vy = 0;
    this.gravity = 0.07;
  }

  jump() {
    if(this.y == height - this.r){
    this.vy = -5;
  }
  }
  
  hits(aero) {
    return collideRectRect(this.x, this.y, this.r, this.r, aero.x, aero.y, aero.r, aero.r);
    
  }
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  show() {
    image(bImg, this.x, this.y, this.r, this.r);
    (bImg, this.x, this.y, this.r, this.r);
  }
  



}