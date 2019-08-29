//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var squares = []
var triangles = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(20);
  loadSquares(20);
  loadTriangles(20);
}

//  The draw function is called @ 30 fps
function draw(){
  background(20,20,20);
  runBalls();
  runSquares();
  runTriangles();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
function loadSquares(m){
  for(var z = 0; z < m; z++){
    squares[z] = new Square(random(width), random(height), random(-8,8), random(-8,8));
  }
}
function runSquares(){
  for(var z = 0; z < squares.length; z++){
    squares[z].run2();
  }
}
function loadTriangles(o){
  for(var s = 0; s < o; s++){
    triangles[s] = new Triangle(random(width), random(height), random(-8,8), random(-8,8));
  }
}
function runTriangles(){
  for(var s = 0; s < triangles.length; s++){
    triangles[s].run3()
  }
}
