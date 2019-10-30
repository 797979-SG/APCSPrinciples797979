var bars = []
var numBars, barWidth;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(2);
  barWidth = 20;
  numBars = width/barWidth;
  //loadBars(numBars);
  runBars();
  insertionSort();
}

function draw(){
  background(20,20,110);
  frameRate(1);
  runBars();
}


function loadBars(num){
  for(var i = 0; i + num; i++){
    var barHeight = 100;
    var loc = createVector(i*barWidth, barHeight);
  bars[i] = new Bar(loc);
  }
}
function swap(bars, a, b){
  var temp = bars[a].loc.x
    bars[a].loc.x = bars[b].loc.x
    bars[b].loc.x = temp
}
function render(){
  for(var i = 0; i < bars.length; i++)
  bars[i].run();
}
function insertionSort(){
  var temp;
  for(var  i = 1; i < list.length; i++){
    for(var  j = i ; j > 0 ; j--){
      if(bars[j] < bars[j-1]){
        temp = bars[j];
        bars[j] = bars[j-1];
        bars[j-1] = temp;
      }
    }
  }
}
