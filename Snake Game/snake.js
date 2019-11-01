class Snake{
  constructor(x,y,){
    this.loc = createVector(400,400)
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
    text("Score = " + this.score, 10, 30);
  }
  render(){

  }
}
