document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1, 18]);
  var yScale = new Plottable.Scales.Linear().domain([0, 20]);

  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var yAxis = new Plottable.Axes.Numeric(yScale, "left");

  var xLabel = new Plottable.Components.AxisLabel("Length (letters)", "0");
  var yLabel = new Plottable.Components.AxisLabel("Words (%)", "270");

  var colorScale = new Plottable.Scales.Color().domain(["Number","Frequency"]);
  var legend = new Plottable.Components.Legend(colorScale).yAlignment("top");

  d3.csv("/blog/randomized-strings/data.csv")
    .get(function(error, data) {
      var freqplot = new Plottable.Plots.Area()
        .x(function(d) { return d.Length; }, xScale)
        .y(function(d) { return d.NormalizedFrequency; }, yScale)
        .attr("stroke", "Frequency", colorScale)
        .attr("fill", "Frequency", colorScale)
        .addDataset(new Plottable.Dataset(data));

      var countplot = new Plottable.Plots.Line()
        .x(function(d) { return d.Length; }, xScale)
        .y(function(d) { return d.NormalizedCount; }, yScale)
        .attr("stroke", "Number", colorScale)
        .addDataset(new Plottable.Dataset(data));

      var plots = new Plottable.Components.Group([freqplot, countplot, legend]);

      var chart = new Plottable.Components.Table([
        [yLabel, yAxis, plots],
        [null, null, xAxis],
        [null, null, xLabel]
      ]);

      chart.renderTo("svg#featured-chart");

      window.addEventListener("resize", function() {
        chart.redraw();
      });
    });
});
