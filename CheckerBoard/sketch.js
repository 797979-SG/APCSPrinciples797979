// put setup code here
var squares = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
  for(i = 0; i < squares.length; i++){
      squares[i].render()
  }
}



function loadSquares(){
  for(var )
}
