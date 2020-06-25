let imagemcenario;

function preload(){
   imagemcenario = loadImage('imagens/cenario/floresta.png'); 
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
function draw() {
  background(imagemcenario);
  circle(mouseX,mouseY,200);
}