//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [3,6,1,8,2,9];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  swap(list, 1, 2)
}
function draw(){

}
function swap(list, a, b){
  var temp = list[a]
  list[a] = list[b]
  list[b] = temp;
}
