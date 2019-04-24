
function parseSVG(svg) {
    var t = document.createElement('template');
    t.innerSVG = svg;
    return t.content.cloneNode(true);
}
