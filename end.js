console.log('hello world');
var finalCount = 0;
var keep = 360;
var plotSize = 2;
var d = 200;
var a = 1.672;
var bAndDSize = 0.85;
var aToCAdd = 15;
var baseRingStart = 100;
var endText = '';
var wrapTotal = 620; 
var windowHeight = 500;
var windowWidth = 700;
var lineWidth = 0.5;
var tilt = radians(-15);

function plotRing(start) {
    var ringStart = start;
    var objOut = makeShape(d, a, bAndDSize, baseRingStart, ringStart, aToCAdd, 1, wrapTotal, tilt);

    endText += plotSimple(objOut.a.x, objOut.a.y) + '\n';
    // endText += plotSimple(objOut.b.x, objOut.b.y) + '\n';
    // endText += plotSimple(objOut.c.x, objOut.c.y) + '\n';
    // endText += plotSimple(objOut.d.x, objOut.d.y) + '\n';
}

var numberOfRings = 1;
plotRing((keep / numberOfRings) * 1);
// plotRing((keep / numberOfRings) * 2);
// plotRing((keep / numberOfRings) * 3);

var extra = `blinewidth ${lineWidth} all
windowsize ${windowWidth} ${windowHeight}
drawframe no
asetticks x no
asetticks y no
asetminticks x no
asetminticks y no
framewidth 0
bstyle yes no no no no no no yes no no 0
margins 0 0 0 0
range x ${-plotSize} ${plotSize}
range y ${-plotSize} ${plotSize}`;

var finish = `new\n${endText}\n${extra}`; // ❌ No "execute"

function downloadMacros() {
    let blob = new Blob([finish], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "plot2_script.p2m"; // ✅ Ensure correct extension
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}




// Add a button to trigger the download
var button = document.createElement("button");
button.innerText = "Download Macros";
button.onclick = downloadMacros;
document.body.appendChild(button);
