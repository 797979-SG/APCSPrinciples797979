


//  Global variables
var list = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  for(var i = 0; i < 10; i++){
    list[i] = i
  }
  //shuffle(list, true)
  console.log(list);
  bubbleSort();
}

function bubbleSort(){
  var temp;
  for(var  i = 1; i < list.length; i++){
    for(var  j = i ; j > 0 ; j--){
  //  Swapping Code +++++++++
       if(list[j] < list[j-1]){
         temp = list[j];
         list[j] = list[j-1];
         list[j-1] = temp;
      }
  				//  Swapping Code +++++++++
    }
  }
}
