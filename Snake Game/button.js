class Button{
  constructor(id){
    this.x = 0
    this.y = 0
    this.w = 120
    this.h = 50
    this.clr = color(255)
    this.textclr = color(0)
    this.id = id;
    this.gotostate = 2
  }
  run(){
    this.idCheck();
    this.render();
    this.mouseClicked();
  }
  render(){
    rectMode(CENTER)
    fill(this.clr)
    rect(this.x, this.y, this.w, this.h)
  }
  idCheck(){
    if(this.id === 0){
      this.y = 525
      this.x = 400
      this.clr = color(255,0,0)
      fill(255)
      text("Start",400,475)
      this.gotostate = 2
    }
  }
  mouseClicked(){
    if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y -this.h/2 && mouseY < this.y + this.h/2){
    this.textClr = this.clr
  } else {
    this.textClr = color(0)
  }
  if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y -this.h/2 && mouseY < this.y + this.h/2 && mouseIsPressed){
    gameState = this.gotostate
}}
}
