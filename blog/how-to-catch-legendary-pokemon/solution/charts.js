  
d3.csv("/blog/how-to-catch-legendary-pokemon/solution/data-towns.csv")
.then( (data) => {
  var colors = ["--blue"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

  Plotly.newPlot(
    "towns", 
    [
      { 
        x: data.map( (r) => Number(r.time) ), 
        y: data.map( (r) => r.route ),
        type: "bar",
        orientation: "h",
        text: data.map( (r) => r.route ),
        textposition: 'auto',
        hoverinfo: 'none',
      }
    ],
    {
      showlegend: false,
      xaxis: {
        title: "Expected capture time (steps)"
      },
      yaxis: {
        showticklabels: false
      },
      colorway: colors
    },
    {
      displayModeBar: false,
      responsive: true,
    }
  )

});

  
d3.csv("/blog/how-to-catch-legendary-pokemon/solution/data-routes.csv")
.then( (data) => {
  var colors = ["--blue", "--red", "--red-light"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

  Plotly.newPlot(
    "routes", 
    [
      {
        x: [26.5],
        y: ["Route 31-Violet City"],
        type: "bar",
        orientation: "h",
        text: ["Route 31-Violet City"],
        textposition: 'auto',
        hoverinfo: 'none',
      },
      { 
        x: data.map( (r) => Number(r.time) ), 
        y: data.map( (r) => r.routes ),
        type: "bar",
        orientation: "h",
        text: data.map( (r) => r.routes ),
        textposition: 'auto',
        hoverinfo: 'none',
      },
      { 
        x: data.map( (r) => Number(r.time2) - Number(r.time) ), 
        y: data.map( (r) => r.routes ),
        type: "bar",
        orientation: "h",
        hoverinfo: 'none',
      },
    ],
    {
      showlegend: false,
      xaxis: {
        title: "Expected capture time (steps)"
      },
      yaxis: {
        showticklabels: false
      },
      colorway: colors,
      barmode: "stack"
    },
    {
      displayModeBar: false,
      responsive: true,
    }
  )

});
