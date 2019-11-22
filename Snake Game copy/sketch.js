var snake;
var food;
var w = 25;
playfield = 800;

function setup() {
  var cnv = createCanvas(playfield, playfield);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  frameRate (30);
  snake = new Snake(Math.floor(Math.random()*26)*26,Math.floor(Math.random()*26)*20,20)
  food = new Food(Math.floor(Math.random()*26)*26,Math.floor(Math.random()*26)*20,20)
}
function runObjects(){
  snake.run();
  food.run();
}
function draw() {
  background(20,20,20);
  scoreboard();
  runObjects();
  if (snake.eat(food)) {
    food.render();
  }
  fill (255,0,100);
  rect(food.x,food.y, w, w);
}

function scoreboard() {
  fill(0);
  rect(0, 800, 600, 40);
  fill(255);
  textSize(20);
  text("Score: ", 10, 775);
  text("Highscore: ", 450, 775)
  text(snake.score, 70, 775);
  text(snake.highscore, 540, 775)
}


function keyPressed() {
  if (keyCode === UP_ARROW){
      snake.dir(0, -1);
  }else if (keyCode === DOWN_ARROW) {
      snake.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW) {
      snake.dir (1, 0);
  }else if (keyCode === LEFT_ARROW) {
      snake.dir (-1, 0);
  }
}
