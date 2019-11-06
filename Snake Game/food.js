class Food{
  constructor(x,y){
    this.loc = createVector(x,y)
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
if(snake.head.x === this.head.x &&
  )
}
}
