document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1915, 2015]);
  var yScale = new Plottable.Scales.Linear().domain([0, 75]);
  var colorScale = new Plottable.Scales.Color().domain(["Ross"]);

  d3.csv("/blog/whats-in-a-name/data-historical.csv")
    .get(function(error, data) {
      var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
      var yAxis = new Plottable.Axes.Numeric(yScale, "left");


      var plot = new Plottable.Plots.Area()
          .x(function(d) { return d.DATE; }, xScale)
          .y(function(d) { return d.ROSS; }, yScale)
          .attr("stroke", "Ross", colorScale)
          .attr("fill", "Ross", colorScale)
          .addDataset(new Plottable.Dataset(data));

      var chart = new Plottable.Components.Table([
          [yAxis, plot],
          [null,  xAxis],
      ]);
      chart.renderTo(("svg#ross"));

      window.addEventListener("resize", function() {
        names.forEach(function(name) { chart.redraw(); })
      });
    });
});
