class Ball{
  constructor(loc){
    this.loc = location;
    this.w = ballWidth;
    this.clr = color(random(255), 0, 0);
  }
run(){
  this.render();
}
render(){
  fill(this.clr);
  ellipse(this.loc.x,this.loc.y,this.w,this.w);
  }
}
