
//  Global variables
var list = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  for(var i = 0; i < 11; i++){
    list[i] = i
  }
  console.log(list);
  selectionSort();
}
function selectionSort(){
  for(var i = 0; i < list.length - 1; i++){
    var index = i;
      for(var j = i + 1; j < list.length; j++){
        if (list[j] < list[index]){
        index = j;
      }
    }
      var smallerNumber = list[index];
      list[index] = list[i];
      list[i] = smallerNumber;
  }
}
