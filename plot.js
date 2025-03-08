function plotSimple(x,y){
  var buffer = '';
  var text = '';
  var color = 0;
  var width = 1;

  for(i=0;i<x.length - 1;i++){
    buffer += 'newbuffer' + '</br>';
    text += 'addvalue ' + finalCount + ' ' + x[i] + ' ' + y[i] + '</br>';
    text += 'addvalue ' + finalCount + ' ' + x[i + 1] + ' ' + y[i +1] + '</br>';
    text += 'bcolor ' + color + ' ' + color + ' ' + color + ' ' + finalCount + '</br>'
    finalCount++
   }
    var line = buffer + text;
    return line
}