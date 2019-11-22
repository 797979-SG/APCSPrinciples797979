//  Sebastian Gomez
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var gameState = 2;
var buttons = [];
var snake;
var food;
var snakeWidth = 25;
var body = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  frameRate(10);
  loadObjects();
}


function draw() {
  textAlign(CENTER);
  textSize(60);
  fill(255)
  text("SNAKE GAME", 400,200);


  if(gameState === 1){
    startgame()//Main Screen
  }else if (gameState === 2){
    playgame()//Play Screen
  }else if (gameState === 3){
    endgame()//Lose Screen
  }
}

function runObjects(){
  background(5,5,5,20);
  snake.run();
  food.run();
}

function loadObjects(){
  var numCol = width/snakeWidth;
  snake = new Snake(Math.floor(Math.random()*numCol),Math.floor(Math.random()*numCol))
  food = new Food(Math.floor(Math.random()*numCol),Math.floor(Math.random()*numCol),20)
}

function startgame(){
  textAlign(CENTER);
  textSize(60);
  fill(255)
  text("SNAKE GAME", 400,200);
  console.log(gameState);
  for(var i = 0; i < 3; i++){
     buttons[i] = new Button(i)
  }
  for(var i = 0; i < buttons.length; i++){
    buttons[i].run();
  }
}
function playgame(){
  background(0)
  runObjects();
}
function endgame(){
  background(0)
  if(this.score = 100){
    textAlign(CENTER)
    textSize(60)
    fill(255)
    text("YOU WIN", 400,200)
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){//LEFT
    snake.vel = createVector(-1,0);
  }else if (keyCode === UP_ARROW){//UP
    snake.vel = createVector(0,-1);
  }else if (keyCode === DOWN_ARROW){//DOWN
    snake.vel = createVector(0,1);
  }else if (keyCode === RIGHT_ARROW){//RIGHT
    snake.vel = createVector(1,0);
  }
}
