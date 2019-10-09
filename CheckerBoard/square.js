class Square{
  constructor(x , y, id1, id2){
    this.loc = creatVector(x , y)
    this.w = 150
    this.clr = color(random(255),random(255),random(255))
    this.render
    this.clr1 = color(0)
    this.clr2 = color(255)
    this.idLength = id1
    this.idWidth = id2
  }
  run(){
    this.render
  }
  render(){
    if(this.idWidth % 2){
      this.length = this,idLength + 1;
    }
    if(this.idLength % 2 === 0){
      fill(this.clr1)
      rect(this.loc.x, this.loc.y, this.w, this.w)
    }else {
      fill(this.clr2)
      rect(this.loc.x, this.loc.y, this.w, this.w)
    }

  }

}

}//  End of Square constructor function
