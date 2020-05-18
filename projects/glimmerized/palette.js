

const greyScale = chroma.scale(["#141028", "#272339", "#ede9f8", "#fcfcff"]).mode('lab').domain([0,2,22,24])

const blacks = [0,1,2].map((c) => chroma(greyScale(c)));
const black = blacks[blacks.length - 1];

const whites = [22,23,24].map((c) => chroma(greyScale(c)));
const white = whites[whites.length - 1];

const greys = [6,9,12,15,18].map((c) => chroma(greyScale(c)));

const colorScales = [
  [["#3d0029", "#e50684", "#ff80c4", white], [0,10,14,25]], // red
  [["#280b51", "#6C3CB4", "#c799ff", white], [0,10,14,25]], // purple
  [["#1c183b", "#403d94", "#8f87d9", white], [0,10,14,25]], // indigo
  [["#0a1843", "#0075eb", "#67b0fe", white], [0,10,14,25]], // blue
  [["#181b2c", "#1da575", "#7dd9af", white], [0,10,14,25]], // green
  [["#281c29", "#ffba42", "#ffe18f", white], [0,10,14,25]], // yellow
].map( (e) => chroma.scale(e[0]).domain(e[1]).mode('lab') )

const colors = colorScales.map( (f) => [0,2,6,10,12,14,18,22,24].map( (n) => chroma(f(n))));



// Color wheel
// ===========

const BAND_RADIUS = [0, 10, 20, 30, 90, 100, 160, 170, 180, 185];
const WEDGE_ANGLE = Array(colors.length + 1).fill().map((_, i) => (1.5-i) * 2 * Math.PI / (colors.length));

const svg = d3.select('#color-wheel').append('svg')
  .attr('viewBox', "-400 -200 800 450")
  .attr('width', '100%')


colors.forEach( (hue, hueIndex) => {
  hue.forEach( (shade, shadeIndex) => {
    const arc = d3.arc()
      .innerRadius(BAND_RADIUS[shadeIndex])
      .outerRadius(BAND_RADIUS[shadeIndex + 1])
      .startAngle(WEDGE_ANGLE[hueIndex] || 0)
      .endAngle(WEDGE_ANGLE[hueIndex + 1] || 0)

    svg.append('g')
      .selectAll('path').data([(shade || white)])
      .enter()
      .append('path')
        .attr('fill', d => d3.color(d))
        .attr('d', arc());
  })
})

greys.forEach( (shade, shadeIndex) => {
  svg.append('g')
    .selectAll('path').data([(shade || white)])
    .enter()
    .append('rect')
      .attr('fill', d => d3.color(d))
      .attr('x', -100 + 40 * shadeIndex )
      .attr('y', 200 )
      .attr('width', 40)
      .attr('height', 40);
})

blacks.forEach( (shade, shadeIndex) => {
  svg.append('g')
    .selectAll('path').data([(shade || white)])
    .enter()
    .append('rect')
      .attr('fill', d => d3.color(d))
      .attr('x', 250)
      .attr('y', -80 + 40 * shadeIndex )
      .attr('width', 40)
      .attr('height', 40);
})

whites.forEach( (shade, shadeIndex) => {
  svg.append('g')
    .selectAll('path').data([(shade || white)])
    .enter()
    .append('rect')
      .attr('fill', d => d3.color(d))
      .attr('x', -290)
      .attr('y', -80 + 40 * shadeIndex )
      .attr('width', 40)
      .attr('height', 40);
})


// ---------------

let colorList = document.querySelector('#color-list');
let palette = document.querySelector('#palette');
let template = document.querySelector('#swatch');

for (const hue of (colors.concat([greys, blacks, whites]))) {
  let table = palette.content.cloneNode(true);

  for (const c of hue.filter( (c) => (c != null) )) {
    let row = template.content.cloneNode(true);
    let bestgrey = (chroma.contrast(black, c) > chroma.contrast(white, c) ? black : white);
    row.firstElementChild.style.backgroundColor = c.hex();
    row.firstElementChild.style.color = bestgrey.hex();

    let blackContrastCell = row.querySelector(".swatch-contrast-black")
    blackContrastCell.style.backgroundColor = black.hex();
    blackContrastCell.style.color = c.hex();

    let whiteContrastCell = row.querySelector(".swatch-contrast-white")
    whiteContrastCell.style.backgroundColor = white.hex();
    whiteContrastCell.style.color = c.hex();

    let properties = [
      c.hex(),
      "hsl(" + Math.round(c.get('hsl.h')) + ", "
        + Math.round(c.get('hsl.s') * 100) + "%, "
        + Math.round(c.get('hsl.l') * 100) + "%)",
      "" + Math.round(c.get('lch.l')) + "%",
      "" + Math.round(c.get('lch.c')) + "%",
      "" + Math.round(c.get('lch.h')) + "°",
      "" + Math.round(chroma.contrast(black, c) * 10) / 10.0,
      "" + Math.round(chroma.contrast(white, c) * 10) / 10.0
    ];
    let cells = row.querySelectorAll("td");
    cells.forEach((td) => { td.style.border = 0 });

    properties.forEach( (t, i) => { cells[i].textContent = t })

    table.firstElementChild.appendChild(row);
  }
  colorList.appendChild(table);
}
