class Snake{
  constructor(x,y,){
    this.loc = createVector(width/w/2, height/w/2)
    this.vel = createVector(0,0)
    this.clr = color(255,0,0)
    this.body = [];
    this.score = 0
  }
  run(){
    this.entangle();
    this.update();
    this.render();
  }
  update(){
    if(keycode === LEFT_ARROW){//LEFT
      this.vel.x = -1
      this.vel.y = 0
    }else if (keycode === UP_ARROW){//UP
      this.vel.y = -1
      this.vel.x = 0
    }else if (keycode === DOWN_ARROW){//DOWN
      this.vel.y = -1
      this.vel.x = 0
    }else if (keycode === RIGHT_ARROW){//RIGHT
      this.vel.x = 1
      this.vel.y = 0
    }
    if(this.length === 0){
      this.prevloc.x = this.loc.x
      this.prevloc.y = this.loc.y
      this.prevvel.x = this.vel.x
      this.prevvel.y = this.vel.y
    }else if (this.length > 0) {
      this.prevloc.x = this.body[this.length-1].loc.x
      this.prevloc.y = this.body[this.length-1].loc.y
      this.prevvel.x = this.body[this.length-1].vel.x
      this.prevvel.y = this.body[this.length-1].vel.y
    }
    textAlign(LEFT);
    textSize(32);
    fill(255)
    text("Score = " + this.score, 10, 30);//finish when able to eat food
  }
  render(){
    fill(this.clr);
    rect(this.loc.x*w ,this.loc.y*w, w, w)
  }

  entangle(){
  if(this.loc.x >= 80){
    gameState = 3
  }else if (this.loc.x < 0) {
    gameState = 3
  }else if (this.loc.y >= 80) {
    gameState = 3
  }else if (this.loc.y < 0) {
    gameState = 3
  }
}
}
