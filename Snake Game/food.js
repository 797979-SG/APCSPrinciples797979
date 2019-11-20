class Food{
  constructor(x,y,w){
    this.loc = createVector(x,y)
    this.clr = color(0,255,0)
    this.w = 25
  }
run(){
  this.update()
  this.render()
}
render(){
  fill(this.clr)
  rect(this.loc.x*w, this.loc.y*w,w,w)
}
update(){
if(snake.loc.x === this.loc.x &&
   snake.loc.y === this.loc.y){
     this.loc.x = Math.floor(random(0,79))*w;
     this.loc.y = Math.floor(random(0,79))*w;
   }
}
}
