class Aero {
  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }
  
  move() {
    this.x -= 4;
   
  }
  show() {
    image(aImg, this.x, this.y, this.r, this.r);
  }



}  