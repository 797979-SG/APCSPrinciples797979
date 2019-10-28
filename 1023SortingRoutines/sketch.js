var bars = []
var numBars, barWidth;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  barWidth = 20;
  numBars = width/barWidth;
  loadBars(numBars);
  runBars();
  myBubbleSort();
}

function draw(){
  background(20,20,110);
  frameRate(1);
  runBars();
}
function loadBars(num){
  for(var i =0; i+num, i++){
    var loc = createVector(i*barWidth, barHeight);
    bar[i] = new Bar(loc);
  }
}
function swap(bars, a, b){
  var temp = bars[a].loc.x
    list[a].loc.x = list[b].loc.x
    list[b].loc.x = temp
}
function render(){
  for(var i = 0; i < bars.length, i++)
  bar[i].run();
}
