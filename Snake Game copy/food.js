class Food{
  constructor(x,y){
    this.x = x
    this.y = y
    this.w = 25
  }
run(){
  this.update()
  this.render()
}
render(){
  var cols = floor(playfield/w);
  var rows = floor(playfield/w);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(w);
}
  // Check the food isn't appearing inside the tail
update(){
  for (var i = 0; i < snake.body.length; i++) {
    var pos = snake.body[i];
    var d = dist(this.food.x, this.food.y, this.pos.x, this.pos.y);
    if (d < 1) {
      render();
      }
    }
  }
}
