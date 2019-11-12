class Snake{
  constructor(x,y,){
    this.loc = createVector(width/w/2, height/w/2)
    this.vel = createVector(0,0)
    this.clr = color(random)
    this.body = [];
    this.score = 0
  }
  run(){
    this.entangle();
    this.update();
    this.render();
  }
  update(){
    if(keycode === 37){//LEFT
      this.vel.x = -1
      this.vel.y = 0
    }else if (keycode === 38){//UP
      this.vel.y = -1
      this.vel.x = 0
    }else if (keycode === 40){//DOWN
      this.vel.y = -1
      this.vel.x = 0
    }else if (keycode === 39){//RIGHT
      this.vel.x = 1
      this.vel.y = 0
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
