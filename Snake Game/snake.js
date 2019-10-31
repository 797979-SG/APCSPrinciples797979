class Snake{
  constructor(x,y,){
    this.loc = createVector(400,400)
    this.vel = createVector(0,0)
    this.clr = color(random)
    this.body = [];
    this.score = 0
  }
}
  run(){
    this.entangle();
    this.update();
    this.render();
  }
  update(){
    textAlign(LEFT);
    textSize(32);
    fill(255)
    text("Score = " + this.score, 10, 30);
  }
  render(){

  }
