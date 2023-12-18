class Cuadrado {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.largo = random(1, 50);
      this.ancho = random(1, 50)
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
      rect(this.x, this.y, this.ancho, this.largo);
    }
  }
