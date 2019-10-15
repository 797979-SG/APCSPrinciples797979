/*
**Lab 1007 Ball
**Checker Board
**
*/


//  Global variables
var list = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  for(var i = 0; i < 7; i++){
    list[i] = i
  }
  shuffle(list, true)
  console.log(list);
  bubbleSort();
  list = [11, 3, 1, 5, 6, 2, 4]
}

function bubbleSort(){
  for(var j = 0; j < list.length; j++){
    for(var i = 0; i < list.length; i++){
      if(list[j+1] < list[j]){
        temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp
      }
    }
  }
}
