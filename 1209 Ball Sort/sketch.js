var balls = [];
var numballs, ballWidth;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0);
  ballWidth = 15;
  numballs = width/ballWidth;
  loadballs(20);
  runBalls();
  insertionSort();
}

function loadballs(numballs){
    for(var i = 0; i < numballs; i++){
      balls[i]= new Ball(random(width), random(0,420), random(-5,5),random(-5,5));
    }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function swap(balls, a, b){
  var temp = balls[a].loc.x
  balls[a].loc.x = balls[b].loc.x
  balls[b].loc.x = temp
}

function insertionSort(){
  var temp;
  for(var  i = 1; i < list.length; i++){
    for(var  j = i ; j > 0 ; j--){
      if(balls[j] < balls[j-1]){
        temp = balls[j];
        balls[j] = balls[j-1];
        balls[j-1] = temp;
      }
    }
  }
}
