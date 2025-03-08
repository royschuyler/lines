console.log('hello world')
var finalCount = 0;
var keep = 360;
var plotSize = 2;
var d = 200;
var a = 1.272;
var bAndDSize = 0.85;
var aToCAdd = 15;
var baseRingStart = 100;
var endText = '';
var wrapTotal = 160; 
var windowHeight = 500;
var windowWidth = 700;
var lineWidth = .5;
var tilt = radians(-15)


function plotRing(start){

	var ringStart = start;

	var objOut = makeShape(d,a,bAndDSize,baseRingStart,ringStart,aToCAdd,1,wrapTotal,tilt);

	endText += plotSimple(objOut.a.x,objOut.a.y) + '</br>';
	endText += plotSimple(objOut.b.x,objOut.b.y) + '</br>';
	endText += plotSimple(objOut.c.x,objOut.c.y) + '</br>';
	endText += plotSimple(objOut.d.x,objOut.d.y) + '</br>';

}

var numberOfRings = 3;

plotRing((keep/numberOfRings)*1);
plotRing((keep/numberOfRings)*2);
plotRing((keep/numberOfRings)*3);

var extra = 'blinewidth ' + lineWidth + ' all' + '</br>' + 'windowsize ' + windowWidth + ' ' + windowHeight + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize+ '</br>' + 'range y ' + -plotSize + ' ' + plotSize;

var finish = 'new' + '</br>' + endText + '</br>' + extra

var element = document.getElementById('p1');
element.innerHTML = finish + '</br>';