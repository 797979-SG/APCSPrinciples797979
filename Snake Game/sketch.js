//  Sebastian Gomez
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var gameState = 2;
var buttons = [];
var snake
var food
var w = 25;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
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
function loadObjects(){
  snake = new Snake(width/2, height-150, 150, 30)
  food = new Food(random(width), random(0,420), random(-5,5), random(-5,5));
}
function runObjects(){
  background(5,5,5,20);
  // snake.run()
  food.run();
}

function startgame(){
  textAlign(CENTER);
  textSize(60);
  fill(255)
  text("SNAKE GAME", 400,200);
  loadObjects();
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
  if(this.score = 100){
    textAlign(CENTER)
    textSize(60)
    fill(255)
    text("YOU WIN", 400,200)
  // }else if () {
  //   textAlign(CENTER)
  //   textSize(60)
  //   fill(255)
  //   text("YOU LOSE",400,200)
  }
}
