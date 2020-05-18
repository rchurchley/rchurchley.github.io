d3.csv("/blog/exponential-katamari/data.csv")
  .then( (data) => {
    var colors = ["--red", "--blue", "--green", "--yellow"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );
    console.log(colors)

    Plotly.newPlot(
      "katamari", 
      [
        {
          x: data.map( (r) => Number(r.Time) ),
          y: data.map( (r) => Number(r.Grumps) ),
          line: {shape: "spline"}
        },
        {
          x: data.map( (r) => Number(r.Time) ),
          y: data.map( (r) => Number(r.MasaeAnela) ),
          line: {shape: "spline"}
        },
        {
          x: data.map( (r) => Number(r.Time) ),
          y: data.map( (r) => Number(r.AnzaTNT) ),
          line: {shape: "spline"}
        },
        {
          x: data.map( (r) => Number(r.Time) ),
          y: data.map( (r) => Number(r.Kobs) ),
          line: {shape: "spline"}
        }
      ],
      {
        showlegend: false,
        colorway: colors,
        yaxis: {
          type: 'log',
          autorange: true
        }
      },
      {
        displayModeBar: false,
        responsive: true
      }
    )

  });
