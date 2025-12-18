let angle1 = 0;
let angle2 = 0;
let angleV1 = 0.07;
let angleV2 = 0.03;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
 background(0, 5);
  translate(width / 2, height / 2);
  fill(57, 255, 20);
  stroke(57, 255, 20);
  let ampx = (0.75 * width) / 2;
  let ampy = (1 * height) / 2;
  let x = map(cos(angle1), -3/4, 3/4, -ampx, ampx);
  let y = map(sin(angle2), -1, 1, -ampy, ampy);
  strokeWeight(4);
  circle(x, y, 32);
  square(-x,-y,-32)
  fill(57, 255, 20);
  stroke(57, 255, 20);
  angle1 += angleV1;
  angle2 += angleV2;
  }
//Amplitude- vertical distance from midline to peak of a curve
//Period - The time i takes for one full cycle of the wave 
