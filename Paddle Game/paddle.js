class Paddle{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.w = 150
    this.h = 20
    this.clr = color(130);
    this.score = 0
    this.health = 10
  }

  run(){
    this.render();
    this.update();
    this.checkEdges();
  }

  render(){
    rectMode(CORNER)
    fill(this.clr);
    rect(mouseX, 600, this.w, this.h);
  }

  update(){
    var mouseLoc = createVector(mouseX, this.loc.y);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .89);
    textAlign(LEFT);
    textSize(32);
    fill(255)
    text("Score = " + this.score, 10, 30);
    textAlign(RIGHT)
    textSize(32)
    fill(255)
    text("Health = " + this.health, 800, 30)
  }
  checkEdges(){
    if(this.loc.x < -1){
      this.loc.x = -1
    }
    if(this.loc.x + this.w > 0.01)
    this.loc.x = 0.01 - this.w
  }
}
