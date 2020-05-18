d3.csv("/blog/whats-in-a-name/data.csv")
  .then( (data) => {
    var colors = ["--red", "--blue", "--green", "--grey"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

    Plotly.newPlot(
      "historical-m", 
      [
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => (Number(r.JOHN) / Number(r.TOTAL) * 100) ),
          name: "John"
        },
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => (Number(r.DAVID) / Number(r.TOTAL) * 100) ),
          name: "David"
        },
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => (Number(r.MICHAEL) / Number(r.TOTAL) * 100) ),
          name: "Michael"
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
      "historical-f", 
      [
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => (Number(r.MARY) / Number(r.TOTAL) * 100) ),
          name: "Mary"
        },
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => (Number(r.SUSAN) / Number(r.TOTAL) * 100) ),
          name: "Susan"
        },
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => (Number(r.JESSICA) / Number(r.TOTAL) * 100) ),
          name: "Jessica"
        },
        {
          x: data.map( (r) => Number(r.DATE) ),
          y: data.map( (r) => (Number(r.OLIVIA) / Number(r.TOTAL) * 100) ),
          name: "Olivia"
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

  

  d3.csv("/blog/whats-in-a-name/generational-names/data-top10share.csv")
  .then( (data) => {
    var colors = ["--purple", "--yellow"].map( (c) => getComputedStyle(document.documentElement).getPropertyValue(c) );

    Plotly.newPlot(
      "toptenshare", 
      [
        {
          x: data.map( (r) => Number(r.Year) ),
          y: data.map( (r) => Number(r.M) ),
          name: "Top ten male names"
        },
        {
          x: data.map( (r) => Number(r.Year) ),
          y: data.map( (r) => Number(r.F) ),
          name: "Top ten female names"
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
