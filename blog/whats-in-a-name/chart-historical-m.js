document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1916, 2015]);
  var yScale = new Plottable.Scales.Linear().domain([0, 5]);

  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var yAxis = new Plottable.Axes.Numeric(yScale, "left");

  var yLabel = new Plottable.Components.AxisLabel("Babies with the given name (%)", "270");

  var colorScale = new Plottable.Scales.Color().domain(["JOHN", "DAVID", "MICHAEL", "ETHAN"]);
  var legend = new Plottable.Components.Legend(colorScale)
    .maxEntriesPerRow(4)
    .xAlignment("center");

  d3.csv("/blog/whats-in-a-name/data-historical.csv")
    .get(function(error, data) {
      var series = []
      var names = ["JOHN", "DAVID", "MICHAEL", "ETHAN"]

      names.forEach(function(name) {
        series.push(new Plottable.Plots.Line()
          .x(function(d) { return d.DATE; }, xScale)
          .y(function(d) { return d[name + "_PCT"]; }, yScale)
          .attr("stroke", name, colorScale)
          .attr("fill", name, colorScale)
          .addDataset(new Plottable.Dataset(data))
        );
      });

      var plots = new Plottable.Components.Group(series);
      var charts = new Plottable.Components.Table([
        [null,   null,  legend],
        [yLabel, yAxis, plots],
        [null,   null,  xAxis]
      ]);
      charts.renderTo(("svg#historical-m"));

      window.addEventListener("resize", function() {
        charts.redraw();
      });
    });
});
