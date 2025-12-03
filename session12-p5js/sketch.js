function setup() {
  createCanvas(600, 400);
  background(220); 
   
  }
function draw() {
  
//make random  
for (var i = 0; i <= width; i+= 50){
  let x = random(width);
  let y = random(height);
  
createFace(x, y);
 }
  }
  
function createFace (x,y){
let r = random(50,255);
let g = random(50,255);
let b = random(50,255);

  //shapes
  fill (r,g,b);
  ellipse(x,y,50,50);
  
  fill(0); 
  ellipse(x - 10, y - 10, 10, 10); 
  ellipse(x + 10, y - 10, 10, 10); 
  
  arc(x, y + 10, 30, 20, 0, PI);
}
//button
function mouseClicked(){
  if (isLooping() === true) {
    noLoop();
  } else {
    loop();
  }

}