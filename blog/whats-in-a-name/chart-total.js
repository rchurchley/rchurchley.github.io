document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1915, 2015]);
  var yScale = new Plottable.Scales.Linear().domain([0, 40000]);
  var colorScale = new Plottable.Scales.Color().domain(["Name", "TOTAL"]);

  d3.csv("/blog/whats-in-a-name/data-historical.csv")
    .get(function(error, data) {
      var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
      var yAxis = new Plottable.Axes.Numeric(yScale, "left");

      var plot = new Plottable.Plots.Area()
          .x(function(d) { return d.DATE; }, xScale)
          .y(function(d) { return d.TOTAL; }, yScale)
          .attr("stroke", "TOTAL", colorScale)
          .attr("fill", "TOTAL", colorScale)
          .addDataset(new Plottable.Dataset(data));

      var chart = new Plottable.Components.Table([
          [yAxis, plot],
          [null,   xAxis],
      ]);
      chart.renderTo(("svg#total"));

      window.addEventListener("resize", function() {
        names.forEach(function(name) { chart.redraw(); })
      });
    });
});
