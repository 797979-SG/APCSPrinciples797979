class Triangle{
  constructor(x3,y3,dx3,dy3){
    this.x3 = x3;
    this.y3 = y3;
    this.dx3 = dx3;
    this.dy3 = dy3;
    this.clr3 = color(random(255),random(255),random(255))
  }
  run3(){
    this.checkEdges3();
    this.update3();
    this.render3();
  }
  checkEdges3(){
    if(this.x3 < 0){
      this.dx3 = -this.dx3;
      this.clr3 = color(random(255),random(255),random(255))
    }
    if(this.x3 > width){
      this.dx3 = -this.dx3;
      this.clr3 = color(random(255),random(255),random(255))
    }
    if(this.y3 < 0){
      this.dy3 = -this.dy3;
      this.clr3 = color(random(255),random(255),random(255))
    }
    if(this.y3 > height){
      this.dy3 = -this.dy3;
      this.clr3 = color(random(255),random(255),random(255))
    }
  }
  update3(){
    this.x3 = this.x3 + this.dx3;
    this.y3 = this.y3 + this.dy3;
  }
  render3(){
    fill(this.clr3);
    triangle(this.x3, this.y3, 11,11,11,11);
  }
}
