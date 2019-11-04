class Food{
  constructor(x,y){
    this.loc = createVector(x,y)
    this.clr = color(255,0,0)
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

}
}
