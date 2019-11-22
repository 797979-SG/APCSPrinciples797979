class Food{
  constructor(x,y){
    this.loc = createVector(x,y)
    this.clr = color(0,255,0)

  }
run(){
  this.update()
  this.render()
}
render(){

  fill(200,150,10)
  rect(this.loc.x*snakeWidth, this.loc.y*snakeWidth,snakeWidth,snakeWidth)
}


update(){
  // check to see if snake is colliding w Food
if(snake.loc.x === this.loc.x && snake.loc.y === this.loc.y){
     var numCols = width/snakeWidth;
     //relocate food
     this.loc.x = Math.floor(random(numCols));
     this.loc.y = Math.floor(random(numCols));
     this.score = this.score + 1
     //push new segment
     snake.body.push(createVector( Math.floor(random(numCols)),
                                   Math.floor(random(numCols))));
   }
}
}
