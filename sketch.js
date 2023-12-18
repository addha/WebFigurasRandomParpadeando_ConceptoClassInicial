let bugs = []; // array of Jitter objects
let cuadrados=[]
var cua
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create objects
 for (let a = 0; a < 50; a++) {
    bugs.push( new Elipse());
  }


 //cua =  new Cuadrado();

 for (let i = 0; i < 50; i++) {
    cuadrados.push( new Cuadrado());
  }
}

function draw() {
  background(50, 89, 100);
 for (let a = 0; a < bugs.length; a++) {
    bugs[a].move();
    bugs[a].display();
   }
  
   for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].move();
    cuadrados[i].display();
   }

}
