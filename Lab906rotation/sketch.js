var ships = [];
var attractor, repeller;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  fill(200,30,150)
  loadObjects(100);
}

//  The draw function is called @ 30 fps
function draw(){
  background(20,20,20,3);
  runBalls();
}

function loadObjects(n){
  attractor = new Ball(width/2, height/2, random(-1,1),random(-1,1));
  repeller = new Ball(width/2, height/2, random(-1,1),random(-1,1));
    for(var i = 0, i < n, i++){
      ships[i] = new Ship(random(width), random(height), random(-2,2), random(-2,2))
    }
}

function runBalls(){
  mainBall.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
