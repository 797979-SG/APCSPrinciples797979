class Bar{
  constructor(){
    this.loc = createVector(x,y);
    this.h = height - this.loc.y
    this.w = barWidth
  }
}
run(){
  render();
}

function render(){
  fill(200,150,20)
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
