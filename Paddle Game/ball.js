class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 10
    this.id = id;
    if(this.id < 0)(this.w = 20)
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
    this.remove();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      this.clr = color(random(255), random(255), random(255))
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
      this.clr = color(random(255), random(255), random(255))
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      this.clr = color(random(255), random(255), random(255))
    }
    if(this.loc.y >= 600 && this.loc.y < 706 && this.loc.x > mouseX - paddle.w/2 && this.loc.x <= mouseX + paddle.w/2){
      this.vel.y = -this.vel.y
      score = score + 1
    }

  }

  update(){
    this.vel.add(this.acc)
    this.loc.add(this.vel)
  }


  isColliding(){
    if( this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h){
        console.log("true");
        return true;
      }else{
        console.log("false");
        return false;
      }

    }

    render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }

    remove(){
      for(var i = balls.length - 1; i>=0; i--){
        if(balls[i].isColliding()){
          balls.splice(i, 1);
          paddle.health = paddle.health - 1
        }
      }
    }

  }//end ball
