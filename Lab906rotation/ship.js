class Ships{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 10
    this.id = id;
    if(this.id < 0)(this.w = 100)
}

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  //if(this.loc.x < 0) this.loc.x = width;
//  if(this.loc.x > width) this.loc.x = 0;
  //if(this.loc.y < 0) this.loc.y = height;
  //if(this.loc.y > height) this.loc.y = 0;
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
  }
}

update(){
  var distToMainBall2;
  var distToMainBall;
  if(this.id >= 0){
    distToMainBall = this.loc.dist(attraction.loc);
    distToMainBall2 = this.loc.dist(repulsion.loc);
    if(distToMainBall < 250){
      //attraction
    this.acc = p5.Vector.sub(attraction.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
  if(distToMainBall2 < 150){
    //repulsion
    this.acc = p5.Vector.sub(this.loc, repulsion.loc);
    this.acc.normalize();
    this.acc.mult(0.5);
  }
}

  this.vel.add(this.acc)
  this.loc.add(this.vel)
  this.vel.limit(2)
}

render(){
  fill(this.clr);
  //ellipse(this.loc.x, this.loc.y, this.w, this.w);
  //this.clr = color(200, 200, 200)
  this.angle= this.vel.heading() + PI/2;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5, 8, 5, 8, 0, -8);
  pop();
}

}//end of Ships class
