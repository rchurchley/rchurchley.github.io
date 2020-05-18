d3.csv("/blog/whats-in-a-name/gender-neutral-names/data-historical-aggregate.csv")
  .then( (data) => {
    var colors = ["--red", "--blue", "--green", "--yellow", "--purple", "--red-light", "--blue-light", "--green-light", "--yellow-light", "--purple-light"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

    Plotly.newPlot(
      "chris-historical", 
      [
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => Number(r.CHRISTOPHER_M) ), name: "Christopher", stackgroup: 'one' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => Number(r.CHRISTIAN_M) ),
          name: "Christian", stackgroup: 'one' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => Number(r.KRISTOPHER_M) ), name: "Kristopher", stackgroup: 'one' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => Number(r.CHRIS_M) ), name: "Chris", stackgroup: 'one' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => Number(r.KRIS_M) ), name: "Kris", stackgroup: 'one' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => -Number(r.CHRISTINE_F) ), name: "Christine", stackgroup: 'two' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => -Number(r.CHRISTINA_F) ), name: "Christina", stackgroup: 'two' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => -Number(r.KRISTINA_F) ), name: "Kristina", stackgroup: 'two' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => -Number(r.KRISTINE_F) ), name: "Kristine", stackgroup: 'two' },
        { x: data.map( (r) => Number(r.DATE) ), y: data.map( (r) => -Number(r.CHRISTIANA_F) ), name: "Christiana", stackgroup: 'two' }
      ],
      {
        legend: {"orientation": "h"},
        colorway: colors,
        yaxis: {
          showticklabels: false
        }
      },
      {
        displayModeBar: false,
        responsive: true
      }
    )

  });


  
d3.csv("/blog/whats-in-a-name/gender-neutral-names/data-neutral.csv")
  .then( (data) => {
    var colors = ["--purple", "--blue-light", "--red-light"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

    Plotly.newPlot(
      "neutral-names", 
      [
        { 
          x: data.map( (r) => Number(r.MIN) ), 
          y: data.map( (r) => r.Name ),
          type: 'bar',
          orientation: 'h',
          name: 'babies'
        },
        { 
          x: data.map( (r) => { let n = Number(r.EXTRA_M); return (n == 0 ? null : n) } ), 
          y: data.map( (r) => r.Name ),
          type: 'bar',
          orientation: 'h',
          name: 'more boys'
        },
        { 
          x: data.map( (r) => { let n = Number(r.EXTRA_F); return (n == 0 ? null : n) } ), 
          y: data.map( (r) => r.Name ),
          type: 'bar',
          orientation: 'h',
          name: 'more girls'
        }
      ],
      {
        showlegend: false,
        colorway: colors,
        barmode: 'stack',
        xaxis: {
          type: 'log',
          autorange: true
        },
        yaxis: {
          showticklabels: false
        }
      },
      {
        displayModeBar: false,
        responsive: true
      }
    )

  });
