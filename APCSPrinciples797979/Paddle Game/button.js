class Button{
  constructor(id){
    this.x = 0
    this.y = 0
    this.w = 120
    this.h = 50
    this.clr = color(255);
    this.textclr = color(0);
    this.id = id;
    this.text = "Smash"
    this.gotostate = 2
    this.gameDifficulty = 1
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
    textAlign(CENTER)
    textSize(32)
    fill(this.textclr)
    text(this.text, this.x, this.y, this.h/4);
  }
  idCheck(){
    if(this.id === 0){
      this.y = 500
      this.x = 200
      this.clr = color(0,255,0)
      this.text = "Easy"
      this.gotostate = 2
      this.gameDifficulty = 1
    }else if (this.id === 1) {
      this.y = 500
      this.x = 400
      this.clr = color(244,232,105)
      this.text = "Medium"
      this.gotostate = 2
      this.gameDifficulty = 2
    }else if (this.id === 2) {
      this.y = 500
      this.x = 600
      this.clr = color(255,0,0)
      this.text = "Hard"
      this.gotostate = 2
      this.gameDifficulty = 3
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
