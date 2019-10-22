


//  Global variables
var list = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  for(var i = 0; i < 10; i++){
    list[i] = i
  }
  console.log(list);
  InsertionSort();
