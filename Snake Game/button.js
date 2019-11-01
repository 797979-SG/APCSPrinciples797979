class Button{
  constructor(id){
    this.x = 0
    this.y = 0
    this.w = 0
    this.h = 0
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
    rectmode(CENTER)
    fill(this.clr)
    rect(this.x, this.y, this.w, this.h)
    textAlign(CENTER)
    textSize(32)
    fill(this.textClr)
    text(this.text, this.x, this.y, this.h/4)
  }
  idCheck(){
    if(this.id === 0){
      this.y = 500
      this.x = 200
      this.clr = color(0,255,0)
      fill(255)
      text("Start",200,475)
      this.gotostate = 1
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
