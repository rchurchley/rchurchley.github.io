let root = document.querySelector('#root');
let swatch = document.querySelector('#swatch');
let pal = document.querySelector('#pal');

d3.csv("/projects/cross-stitch/DMC.csv")
  .then((data) => {
    // data from https://krestiki.at.ua/color_table_d.html, which appears to be consistent with Stitchly
    data = data.filter((r) => (r.k && (r.k != '')))
      .map((r) => ({ code: r.code, name: r.name, have: (r.have == 'true'), color: chroma(r.k) }))
      .sort((x, y) => (
        Math.round((y.color.hsl()[0] - x.color.hsl()[0]) / 30) +
        (x.color.lch()[0] - y.color.lch()[0]) / 100 +
        Math.round((1 / x.color.lch()[1] - 1 / y.color.lch()[1]) * 2) * 10
      ))

    data.forEach(r => {
      let row = swatch.content.cloneNode(true);
      let tag = row.querySelector(".swatch");
      tag.classList.add(`dmc-${r.code}`)
      tag.querySelector(".dmc").textContent = r.code;
      tag.querySelector(".name").textContent = r.name;
      tag.parentElement.dataset.tag = r.have ? 'tag-1' : 'tag-2';
      root.appendChild(row)
    });

    palFile = ["JASC-PAL", "0100", `${data.filter(r => r.have).length}`].concat(data.filter(r => r.have).map((r) => r.color.rgb().join(" ")));
    pal.textContent = palFile.join("\n")
  });
