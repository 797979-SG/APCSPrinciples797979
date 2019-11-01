//  Sebastian Gomez
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var gameState = 1
var button = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
//  The draw function is called @ 30 fps

}


function draw(){
  if(gameState === 1){
    startgame()
  }
}
function startgame(){
  textAlign(CENTER)
  textSize(60)
  text("SNAKE GAME", 400,200)
  for(var i = 0; i < button.length; i++){
    button[i].run();
  }
}
