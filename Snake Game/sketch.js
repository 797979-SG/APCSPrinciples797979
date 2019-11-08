//  Sebastian Gomez
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var gameState = 1;
var buttons = [];

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
