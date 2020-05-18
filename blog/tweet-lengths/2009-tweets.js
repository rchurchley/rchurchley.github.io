d3.csv("/blog/tweet-lengths/2009-data.csv")
  .then( (data) => {
    var colors = ["--red"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

    Plotly.newPlot(
      "tweets2009", 
      [
        {
          x: data.map( (r) => Number(r.Length) ),
          y: data.map( (r) => Number(r.Proportion) ),
          fill: "tozeroy",
          line: {shape: "spline"}
        }
      ],
      {
        showlegend: false,
        colorway: colors,
        xaxis: {
          title: "Length of tweet (characters)"
        },
        yaxis: {
          title: "Proportion of tweets (%)"
        }
      },
      {
        displayModeBar: false,
        responsive: true
      }
    )

  });
