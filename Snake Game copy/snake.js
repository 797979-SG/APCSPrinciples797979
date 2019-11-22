class Snake{
  constructor(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = 1;
    this.dy = 0;
    this.total = 0;
    this.body = [];
    this.score = 1;
    this.highscore = 1;
}

run(){
  this.direction();
  this.eat();
  this.death();
  this.update();
  this.render();
}

direction(x,y){
  this.dx = x
  this.dy = y
}

eat(){
  var d = dist(this.x, this.y, w, w);
  if(d < 1){
    this.total++
    this.score++
    text(this.score,70,625)
    if(this.score > this.highscore){
      this.highscore = this.score
    }
    text(this.highscore, 540, 625)
    return true
    console.log(this.highscore)
  }else if (true) {
    return false
    console.log(this.highscore)
  }
}

death(){
  for(var i = 0; i < this.body.length; i++){
    var pos = this.body[i]
    var d = dist(this.x, this.y, pos.x, pos.y)
    if (d < 1){
      this.total = 0
      this.score = 0
      this.body = []
    }
  }
}
update(){
  if(this.total === this.body.length){
    for(var i = 0; i < this.body.length-1; i++){
      this.body[i] = this.body[i+1]
    }
    this.body[this.total-1] = createVector(this.x,this.y)
    this.x = this.x + this.dx*w
    this.y = this.y + this.dy*w
    this.x = constrain(this.x, 0, playfield-w)
    this.y = constrain(this.y, 0, playfield-w)
  }
}
render(){
  fill(0,255,0)
  for(var i = 0; i < this.body.length; i++){
    rect(this.body[i].x, this.body[i].y, w, w)
  }
  rect(this.x,this.y, w, w)
}
}
