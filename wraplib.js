function numbers (start, end, n){
  var arr = [];
  for(i = start; i < end; i++){
    arr.push(i*n)
  } return arr
}

function arrSin(arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]))
  } return box
}

function arrCos(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(cos(arr[i])*n)
  } return box
}

function wrapXFun(arr,add,multiply,size){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]+add)*multiply[i]*size)
  } return box
}

function wrapYFun(pathx,e,wrapRad,radStart,pathy,size){
  var box = [];
  for(i = 0; i < pathx.length; i++){
    box.push(pathx[i]*e*size*cos(wrapRad[i]+radStart)+pathy[i])
  } return box
}

function twistIt(x,y,t){
  var obj = {
    x: x.map(a => a),
    y: y.map(a => a),
  }
  var objOut = {
    x: [],
    y: []
  }
  for(i=0;i<obj.x.length;i++){
    objOut.x.push((obj.x[i]*cos(t)) + (obj.y[i] * sin(t)));
    objOut.y.push((-obj.x[i]*sin(t)) + (obj.y[i] * cos(t)));
  }
  return objOut
}