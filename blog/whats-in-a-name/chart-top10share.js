document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1916,2015]);
  var yScale = new Plottable.Scales.Linear().domain([0,50]);

  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var yAxis = new Plottable.Axes.Numeric(yScale, "left");
  var yLabel = new Plottable.Components.AxisLabel("Babies with one of the most common names (%)", "270");

  var colorScale = new Plottable.Scales.Color().domain(["Girls", "Boys"]);

  d3.csv("/blog/whats-in-a-name/data-top10share.csv")
    .get(function(error, data) {

      var mplot = new Plottable.Plots.Line()
        .x(function(d) { return d.Year; }, xScale)
        .y(function(d) { return d.M; }, yScale)
        .attr("stroke", "Boys", colorScale)
        .addDataset(new Plottable.Dataset(data));

      var fplot = new Plottable.Plots.Line()
        .x(function(d) { return d.Year; }, xScale)
        .y(function(d) { return d.F; }, yScale)
        .attr("stroke", "Girls", colorScale)
        .addDataset(new Plottable.Dataset(data));

      var plots = new Plottable.Components.Group([mplot, fplot]);

      var chart = new Plottable.Components.Table([
        [yLabel, yAxis, plots],
        [null,   null,  xAxis]
      ]);

      chart.renderTo("svg#toptenshare");

      window.addEventListener("resize", function() {
        chart.redraw();
      });
    });
});
