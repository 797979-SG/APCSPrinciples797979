class Square{1
  constructor(x2,y2,dx2,dy2){
    this.x2 = x2;
    this.y2 = y2;
    this.dx2 = dx2;
    this.dy2 = dy2;
    this.clr2 = color(random(255),random(255),random(255))
  }
  run2(){
    this.checkEdges2();
    this.update2();
    this.render2();
  }
  checkEdges2(){
    if(this.x2 < 0){
      this.dx2 = -this.dx2;
      this.clr2 = color(random(255),random(255),random(255))
    }
    if(this.x2 > width){
      this.dx2 = -this.dx2;
      this.clr2 = color(random(255),random(255),random(255))
    }
    if(this.y2 < 0){
      this.dy2 = -this.dy2;
      this.clr2 = color(random(255),random(255),random(255))
    }
    if(this.y2 > height){
      this.dy2 = -this.dy2;
      this.clr2 = color(random(255),random(255),random(255))
    }
  }
  update2(){
    this.x2 = this.x2 + this.dx2;
    this.y2 = this.y2 + this.dy2;
  }
  render2(){
    fill(this.clr2);
    rect(this.x2, this.y2, 11, 11);
  }
}
