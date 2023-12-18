
// Jitter class

// referencia https://p5js.org/es/reference/#/p5/fill
class Elipse {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(10, 30);
      this.speed = 1;
    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    display() {
        var a =  random(0,255);
         var b = random(5,255);
         var c = random(3,255);
       
       fill(a, b, c);
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }