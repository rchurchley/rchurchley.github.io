d3.csv("/blog/whats-in-a-name/data.csv")
  .then( (data) => {
    var colors = ["--red", "--blue", "--blue-dark"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

    Plotly.newPlot(
      "total", 
      [
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => Number(r.TOTAL) ),
          type: "bar"
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


    Plotly.newPlot(
      "ross", 
      [
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => Number(r.ROSS) / Number(r.TOTAL) * 10000 ),
          type: "bar"
        }
      ],
      {
        legend: {"orientation": "h"},
        colorway: [colors[1]]
      },
      {
        displayModeBar: false,
        responsive: true
      }
    )

  });
