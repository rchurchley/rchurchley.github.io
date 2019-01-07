document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1916,2015]);
  var yScale = new Plottable.Scales.Linear().domain([0,10]);

  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var yAxis = new Plottable.Axes.Numeric(yScale, "left");
  var yLabel = new Plottable.Components.AxisLabel("Babies with a gender-nonspecific name (%)", "270");

  d3.csv("/blog/whats-in-a-name/data-neutralshare.csv")
    .get(function(error, data) {

      var plot = new Plottable.Plots.Area()
        .x(function(d) { return d.Year; }, xScale)
        .y(function(d) { return d.Share; }, yScale)
        .attr("stroke", "#7b46b0")
        .attr("fill", "#7b46b0")
        .addDataset(new Plottable.Dataset(data));


      var chart = new Plottable.Components.Table([
        [yLabel, yAxis, plot],
        [null,   null,  xAxis]
      ]);

      chart.renderTo("svg#neutralshare");

      window.addEventListener("resize", function() {
        chart.redraw();
      });
    });
});
