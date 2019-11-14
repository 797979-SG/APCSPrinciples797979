class Food{
  constructor(x,y,w){
    this.loc = createVector(x,y)
    this.w = w
  }
run(){
  // this.update()
  this.render()
}
render(){
  fill(this.clr)
  rect(this.loc.x*w, this.loc.y*w,w,w)
}
// update(){
// if(snake.head.x === this.head.x &&
//    snake.loc.y === this.loc.y){
//      this.loc.x = Math.floor(random(0,79))*w;
//      this.loc.y = Math.floor(random(0,79))*w;
//    }
// }
}
