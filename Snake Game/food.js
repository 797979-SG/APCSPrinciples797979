class Food{
  constructor(x,y,){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255),random(255),random(255))
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.x < 0){
      this.dx = -this.dx;
      this.clr = color(random(255),random(255),random(255))
    }
    if(this.x > width){
      this.dx = -this.dx;
      this.clr = color(random(255),random(255),random(255))
    }
    if(this.y < 0){
      this.dy = -this.dy;
      this.clr = color(random(255),random(255),random(255))
    }
    if(this.y > height){
      this.dy = -this.dy;
      this.clr = color(random(255),random(255),random(255))
    }
  }

  update(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;

  }
  render(){
    fill(this.clr);
    ellipse(this.x, this.y, 50 ,50);
  }
}
