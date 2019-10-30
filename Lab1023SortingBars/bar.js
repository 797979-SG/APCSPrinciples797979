class Bar{
  constructor(loc){
    this.loc = loc;
    this.h = height - this.loc.y
    this.w = barWidth
  }
run(){
  render();
}
render(){
  fill(200,150,20)
  rect(this.loc.x,this.loc.y,this.w,this.h);
  }
}
