function ellipse(d,a,size,yCentered) {
  var e = 1/a;
  var use = radians(360)/d;
  var obj = {
    x: [],
    y: []
  }
  for(i=0;i<=d;i++){
    obj.x.push(sin(i*use)*size);
    obj.y.push((cos(i*use)*size*e)+yCentered);
  }
  return obj
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