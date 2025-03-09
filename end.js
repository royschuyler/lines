console.log('hello world');
var finalCount = 0;
var keep = 360;
var plotSize = 2;
var d = 400;
var a = 1.618;
var bAndDSize = 0.85;
var aToCAdd = 15;
var baseRingStart = 15;
var endText = '';
var wrapTotal = 1800; 
var windowHeight = 500;
var windowWidth = 700;
var lineWidth = 1;
var tilt = radians(-15);
/*
function plotRing(start, g) {
	endText = '';
    var ringStart = start;
    var objOut = makeShape(d, a, bAndDSize, baseRingStart, ringStart, aToCAdd, 1, wrapTotal, tilt);

    endText += '</br>' + plotSimple(objOut.a.x, objOut.a.y) + '\n';
    // endText += plotSimple(objOut.b.x, objOut.b.y) + '\n';
    // endText += plotSimple(objOut.c.x, objOut.c.y) + '\n';
    // endText += plotSimple(objOut.d.x, objOut.d.y) + '\n';
    var extra = 'blinewidth ' + lineWidth + ' all' + '</br>' + 'windowsize ' + windowWidth + ' ' + windowHeight + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize+ '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
	var loc = '</br>' + 'savejpg /Users/thomasschuyler/Desktop/auto3/' + g + '.jpg' + '</br>' + 'close' + '</br>';
	var finish = 'new' + '</br>' + endText + '</br>' + extra + '</br>' + loc;
	return finish;
}
*/

function plotRing(start, g) {
	endText = ''
	finalCount = 0;
    var ringStart = start;
    var index = g
    var objOut = makeShape(d, a, bAndDSize, (baseRingStart + start), ringStart, aToCAdd, 1, wrapTotal, tilt);

    endText += '</br>' + plotSimple(objOut.a.x, objOut.a.y) + '\n';
    // endText += plotSimple(objOut.b.x, objOut.b.y) + '\n';
    // endText += plotSimple(objOut.c.x, objOut.c.y) + '\n';
    // endText += plotSimple(objOut.d.x, objOut.d.y) + '\n';
    var extra = 'blinewidth ' + lineWidth + ' all' + '</br>' + 'windowsize ' + windowWidth + ' ' + windowHeight + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize+ '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
	var loc = '</br>' + 'savejpg /Users/thomasschuyler/Desktop/auto3/' + g + '.jpg' + '</br>' + 'close' + '</br>';
	var finish = 'new' + '</br>' + endText + '</br>' + extra + '</br>' + loc;
	return finish;
}

var numberOfRings = 1;
var forPlot = plotRing(0,1);
var forPlot1 = plotRing(10,2);
var forPlot2 = plotRing(20,3);
var forPlot3 = plotRing(30,4);
var forPlot4 = plotRing(40,5);
var forPlot5 = plotRing(50,6);
var forPlot6 = plotRing(60,7);
var forPlot7 = plotRing(70,8);
var forPlot8 = plotRing(80,9);
var forPlot9 = plotRing(90,10);
var forPlot10 = plotRing(100,11);
var forPlot11 = plotRing(110,12);
var forPlot12 = plotRing(120,13);

var lastText = forPlot + forPlot1 + forPlot2 + forPlot3 + forPlot4 + forPlot5 + forPlot6 + forPlot7 + forPlot8 + forPlot9 + forPlot10 + forPlot11 + forPlot12;


var element = document.getElementById('p1');
element.innerHTML = lastText + '</br>';

