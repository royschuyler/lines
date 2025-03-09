// ===========================
// CONFIGURABLE VARIABLES
// ===========================

// MASTER SHEET VARIABLES
let MASTER_D7 = 1.6;
let MASTER_D9 = Math.sqrt(Math.pow(MASTER_D7, 2) - 1) / MASTER_D7;
let MASTER_D13 = 0.9;
let MASTER_F7 = 1;
let MASTER_F9 = 2;
let MASTER_B5 = 15;
let MASTER_D15 = 15;

// VARIABLES FROM SHEET "1"
let A2 = 1000;  // Number of plots
let A4 = A2 / 2;
let A6 = 180;
let A8 = radians(A6);
let A10 = A8 / A2;
let A12 = 1 / MASTER_D9;
let A14 = radians(180) / A2;
let A16 = radians(MASTER_B5);
let A18 = radians(MASTER_B5 + MASTER_D15);

// FUNCTION TO CONVERT DEGREES TO RADIANS
function radians(deg) {
    return deg * (Math.PI / 180);
}

// HANDLING #NUM! ERRORS: If calculation fails, return 0
function safeMath(operation, fallback = 0) {
    try {
        let result = operation();
        return isNaN(result) || !isFinite(result) ? fallback : result;
    } catch (e) {
        return fallback;
    }
}

// COMPUTATION LOOP TO REPLICATE EXCEL DATA (LOGGING T and U)
function generateData(rows) {
    let dataPoints = [];

    for (let i = 0; i < rows; i++) {
        let G = i;
        let H = A10 * G;
        let I = safeMath(() => Math.pow(Math.sin(H), MASTER_F9), 0);
        let J = safeMath(() => 1 - Math.pow(Math.cos(H), MASTER_F9), 0);
        let K = J;
        let L = A4 * K;
        let M = A10 * L;
        let N = Math.sin(M);
        let O = MASTER_D9 * Math.cos(M);
        let P = A14 * G;
        let Q = safeMath(() => MASTER_F7 * Math.pow(Math.sin(P), MASTER_F9), 0);

        // Fix: Ensure Q is not zero before division
        let R = Q !== 0 ? radians(1 / Q) : 0;

        // Fix: Ensure S doesn't propagate NaN
        let S = (i === 0 || isNaN(dataPoints[i - 1]?.S)) ? R : dataPoints[i - 1].S + R;

        // Fix: Ensure S + A16 is a valid number before applying sin/cos
        let T = safeMath(() => Math.sin(S + A16) * N, 0);
        let U = safeMath(() => (N * A12 * Math.cos(S + A16)) + O, 0);

        // Store T and U
        dataPoints.push({ T, U });
    }

    return dataPoints;
}

// RUN THE FUNCTION
let computedData = generateData(A2);

// LOG RESULTS TO CONSOLE
console.log("T (x-axis) and U (y-axis) values:");
computedData.forEach(point => console.log(`T: ${point.T}, U: ${point.U}`));

// =============== PLOTTING WITH CHART.JS ===============
function plotGraph(dataPoints) {
    let ctx = document.getElementById("myChart").getContext("2d");

    new Chart(ctx, {
        type: "line",  // ✅ Line chart
        data: {
            datasets: [{
                label: "T vs U",
                data: dataPoints.map(p => ({ x: p.T, y: p.U })),
                borderColor: "blue",  // Line color
                borderWidth: 2, // Make the line visible
                fill: false,  // Disable fill under the line
                tension: 0.3,  // Smoothness (0 = sharp, 1 = very smooth)
                pointRadius: 0  // ✅ No dots
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,  // ✅ Square chart
            aspectRatio: 1,  // ✅ Ensures equal scaling on both axes
            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    title: { display: true, text: "T (x-axis)" }
                },
                y: {
                    title: { display: true, text: "U (y-axis)" }
                }
            }
        }
    });
}

// =============== DISPLAY PLOT ===============
document.addEventListener("DOMContentLoaded", function () {
    plotGraph(computedData);
});
