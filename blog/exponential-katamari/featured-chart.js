document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([0,25]);
  var yScale = new Plottable.Scales.ModifiedLog(10).domain([100,150000]);

  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var yAxis = new Plottable.Axes.Numeric(yScale, "right");

  var xLabel = new Plottable.Components.AxisLabel("Time (min)", "0");
  var yLabel = new Plottable.Components.AxisLabel("Size (cm)", "0");

  var colorScale = new Plottable.Scales.Color().domain(["A","B","C","D","E"]);

  d3.csv("/blog/exponential-katamari/data.csv")
    .get(function(error, data) {
        var series = [
            new Plottable.Plots.Line()
                .x(function(d) { return d.Time; }, xScale)
                .y(function(d) { return d.Grumps; }, yScale)
                .attr("stroke", "A", colorScale)
                .addDataset(new Plottable.Dataset(data)),
            new Plottable.Plots.Line()
                .x(function(d) { return d.Time; }, xScale)
                .y(function(d) { return d.MasaeAnela; }, yScale)
                .attr("stroke", "B", colorScale)
                .addDataset(new Plottable.Dataset(data)),
            new Plottable.Plots.Line()
                .x(function(d) { return d.Time; }, xScale)
                .y(function(d) { return d.AnzaTNT; }, yScale)
                .attr("stroke", "C", colorScale)
                .addDataset(new Plottable.Dataset(data)),
            new Plottable.Plots.Line()
                .x(function(d) { return d.Time; }, xScale)
                .y(function(d) { return d.Kobs; }, yScale)
                .attr("stroke", "D", colorScale)
                .addDataset(new Plottable.Dataset(data))
        ]

      var plots = new Plottable.Components.Group(series);

      var chart = new Plottable.Components.Table([

        [null, yLabel],
        [plots, yAxis],
        [xAxis],
        [xLabel]
      ]);

      chart.renderTo("svg#featured-chart");

      window.addEventListener("resize", function() {
        chart.redraw();
      });
    });
});
