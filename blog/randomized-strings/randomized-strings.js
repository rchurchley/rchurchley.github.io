d3.csv("/blog/randomized-strings/data.csv")
  .then( (data) => {
    var colors = ["--red", "--blue"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

    Plotly.newPlot(
      "distribution", 
      [
        {
          x: data.map( (r) => Number(r.Length) ),
          y: data.map( (r) => Number(r.NormalizedCount) ),
          name: "Word count",
          fill: "tozeroy",
          line: {shape: "spline"}
        },
        {
          x: data.map( (r) => Number(r.Length) ),
          y: data.map( (r) => Number(r.NormalizedFrequency) ),
          name: "Word frequency",
          fill: "tozeroy",
          line: {shape: "spline"}
        }
      ],
      {
        legend: {"orientation": "h"},
        colorway: colors
      },
      {
        displayModeBar: false,
        responsive: true
      }
    )

  });
