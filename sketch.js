var balls = []
var paddle
var score = 0
var gameState = 1
var btnEasy, btnMedium, btnHard;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadObjects(5);

}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
      startgame()
  }else if (gameState === 2){
      playgame()
  }else if (gameState === 3){
      endgame()
  }
}
function makeButtons(){
  btnEasy = new Button(0);
  btnMedium = new Button(1);
  btnHard = new Button(2);
}

function loadObjects(n){
  paddle = new Paddle(width/2, height-150, 150, 30)
  for(var i = 0; i < n; i++){
    balls[i]= new Ball(random(width), random(0,420), random(-5,5),random(-5,5));
  }
}

function runObjects(){
  background(5,5,5,20);
  paddle.run()
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

}
function startgame(){
  textAlign(CENTER)
  textSize(60)
  fill(255)
  text("PADDLE BALL", 400, 200)
  btnEasy.run();
  btnMedium.run();
  btnHard.run();
}
function playgame(){
  runObjects()
}
