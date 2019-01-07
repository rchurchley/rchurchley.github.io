document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1, 145]);
  var yScale = new Plottable.Scales.Linear().domain([0, 2.25]);

  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var yAxis = new Plottable.Axes.Numeric(yScale, "left");

  var xLabel = new Plottable.Components.AxisLabel("Length (characters)", "0");
  var yLabel = new Plottable.Components.AxisLabel("Tweets (%)", "270");

  d3.csv("/blog/tweet-lengths/data.csv")
    .row(function(d) { return { x: d.Length, y: d.Proportion}})
    .get(function(error, data) {
      var plot = new Plottable.Plots.Area()
        .x(function(d) { return d.x; }, xScale)
        .y(function(d) { return d.y; }, yScale)
        .addClass("series-0")
        .addDataset(new Plottable.Dataset(data));

      var chart = new Plottable.Components.Table([
        [yLabel, yAxis, plot],
        [null, null, xAxis],
        [null, null, xLabel]
      ]);

      chart.renderTo("svg#featured-chart");

      window.addEventListener("resize", function() {
        chart.redraw();
      });
    });
});
