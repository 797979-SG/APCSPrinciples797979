class Paddle{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.w = 150
    this.h = 20
    this.clr = color(130);
    this.score = 0
  }

  run(){
    this.render();
    this.update();
    this.checkEdges();
  }

  render(){
    fill(this.clr);
    rect(mouseX, 600, this.w, this.h);
  }

  update(){
    var mouseLoc = createVector(mouseX, this.loc.y);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .89);
    textSize(45);
    text("Score = " + this.score, 10, 30);
    fill(0)
  }
  checkEdges(){
    if(this.loc.x < -1){
      this.loc.x = -1
    }
    if(this.loc.x + this.w > 0.01)
    this.loc.x = 0.01 - this.w
  }
}
