class Snake{
  constructor(x,y){
    this.loc = createVector(x, y)
    this.vel = createVector(0,0)
    this.clr = color(255,0,0)
    this.body = [];
  }
  run(){
    this.update();
    this.entangle();
    this.render();
  }
  update(){
    //update body segments
      console.log(this.body.length)
    for(var i = this.body.length-1; i > 0; i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;

    }
    //  update first element in body array
    if(this.body.length > 0){
      this.body[0].x = this.loc.x;
      this.body[0].y = this.loc.y;
    }

    //update head loc
    this.loc.add(this.vel);
    // if(this.length === 0){
    //   this.prevloc.x = this.loc.x
    //   this.prevloc.y = this.loc.y
    //   this.prevvel.x = this.vel.x
    //   this.prevvel.y = this.vel.y
    // }else if (this.length > 0) {
    //   this.prevloc.x = this.body[this.length-1].loc.x
    //   this.prevloc.y = this.body[this.length-1].loc.y
    //   this.prevvel.x = this.body[this.length-1].vel.x
    //   this.prevvel.y = this.body[this.length-1].vel.y
    // }
    textAlign(LEFT);
    textSize(32);
    fill(255)
    text("Score = " + this.body.length, 10, 30);//finish when able to eat food
  }
  render(){
    for(var i = 0; i < this.body.length; i++){
      fill(20,200,75);
      rect(this.body[i].x*snakeWidth,this.body[i].y*snakeWidth, snakeWidth, snakeWidth)

    }
    fill(10,100,150);
    rect(this.loc.x*snakeWidth,this.loc.y*snakeWidth, snakeWidth, snakeWidth)
  }

  entangle(){
    if(this.loc.x >= height/snakeWidth){
      gameState = 3
    }else if (this.loc.x < 0) {
      gameState = 3
    }else if (this.loc.y >= width/snakeWidth) {
      gameState = 3
    }else if (this.loc.y < 0) {
      gameState = 3
    }
    for(var i = 0; i < this.body.length; i++){
      if(this.loc.x === this.body[i].x && this.loc.y === this.body[i].y){
        gameState = 3
      }
    }
  }
}
