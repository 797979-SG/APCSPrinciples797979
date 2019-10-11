var balls = []
var paddle
var score = 0
var gameState = 1
var buttons = []
var gameDifficulty = 1
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadObjects(10);

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

function loadObjects(n){
  paddle = new Paddle(width/2, height-150, 150, 30)
  for(var i = 0; i < n; i++){
    balls[i]= new Ball(random(width), random(0,420), random(-5,5),random(-5,5));
  }
  for(var i = 0; i < 3; i++){
    buttons[i] = new Button(i)
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
  for(var i = 0; i < buttons.length; i++){
    buttons[i].run();
  }
}

function playgame(){
  runObjects()
}
function endgame(){
  textAlign(CENTER)
  textSize(60)
  fill(255)
  text("YOU LOSE", 400, 200)
}
