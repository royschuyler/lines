function makeShape(d,a,bAndDSize,baseRingStart,ringStart,aToCAdd,sizeForColor,wrapTotal,tilt){

  var obj = {
    a: {
      x: [],
      y: []
    },
    b: {
      x: [],
      y: []
    },
    c: {
      x: [],
      y: []
    },
    d: {
      x: [],
      y: []
    }
  }

  //*********************DERIVED From input vars and WrapLib*********************
  var e = 1/a;
  var aAndBStart = radians(baseRingStart + ringStart);
  var cAndDStart = aAndBStart + radians(aToCAdd);
  var conicE = sqrt((a*a)-1)/a;
  var radUse = radians(180)/d;
  var wrapRadUse = radians(wrapTotal)/d;
  var numbersArr = numbers(0,d,1);
  var pathRadArr = numbers(0,d,radUse);
  var pathx = arrSin(pathRadArr);
  var pathy = arrCos(pathRadArr,conicE);
  var wrapRadArr = numbers(0,d,wrapRadUse);

  //MAKING WRAPS *** See WrapLib
  var wrapAx = wrapXFun(wrapRadArr,aAndBStart,pathx,sizeForColor);
  var wrapAy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,sizeForColor);
  var wrapBx = wrapXFun(wrapRadArr,aAndBStart,pathx,bAndDSize);
  var wrapBy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,bAndDSize);
  var wrapCx = wrapXFun(wrapRadArr,cAndDStart,pathx,sizeForColor);
  var wrapCy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,sizeForColor);
  var wrapDx = wrapXFun(wrapRadArr,cAndDStart,pathx,bAndDSize);
  var wrapDy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,bAndDSize);

  //PUTING WRAPS IN OBJ
  obj.a = twistIt(wrapAx,wrapAy,tilt);
  obj.b = twistIt(wrapBx,wrapBy,tilt);
  obj.c = twistIt(wrapCx,wrapCy,tilt);
  obj.d = twistIt(wrapDx,wrapDy,tilt);

  // obj.a.y = wrapAy;
  // obj.b.y = wrapBy;
  // obj.c.y = wrapCy;
  // obj.d.y = wrapDy;



  return obj

}