function plotSimple(x, y) {
    var buffer = '';
    var text = '';
    var color = 0;
    var width = 1;

    for (let i = 0; i < x.length - 1; i++) {
        buffer += 'newbuffer\n';  // ✅ Use '\n' instead of '</br>'
        text += `addvalue ${finalCount} ${x[i]} ${y[i]}\n`; // ✅ '\n'
        text += `addvalue ${finalCount} ${x[i + 1]} ${y[i + 1]}\n`; // ✅ '\n'
        text += `bcolor ${color} ${color} ${color} ${finalCount}\n`; // ✅ '\n'
        finalCount++;
    }
    var line = buffer + text;
    return line;
}
