document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1916, 2015]);
  var yScale = new Plottable.Scales.Linear().domain([-2.5, 2.5]);
  var colorScale = new Plottable.Scales.Color().domain(["FRANCIS", "LESLIE", "KELLY", "TAYLOR", "RILEY", "QUINN"]);

  d3.csv("/blog/whats-in-a-name/data-historical-aggregate.csv")
    .get(function(error, data) {
      var fplots = {}
      var mplots = {}
      var plots = {}
      var charts = {}
      var xAxes = {}
      var names = ["FRANCIS", "KELLY", "TAYLOR", "RILEY", "LESLIE"]

      names.forEach(function(name) {
        xAxes[name] = new Plottable.Axes.Numeric(xScale, "bottom");

        fplots[name] = new Plottable.Plots.Area()
            .x(function(d) { return d.DATE; }, xScale)
            .y(function(d) { return d[name + "_F"]; }, yScale)
            .attr("stroke", name, colorScale)
            .attr("fill", "#dbddde")
            .addDataset(new Plottable.Dataset(data));

        mplots[name] = new Plottable.Plots.Area()
            .x(function(d) { return d.DATE; }, xScale)
            .y(function(d) { return -d[name + "_M"]; }, yScale)
            .attr("stroke", name, colorScale)
            .attr("fill", name, colorScale)
            .addDataset(new Plottable.Dataset(data));

        plots[name] = new Plottable.Components.Group([fplots[name],
                                                      mplots[name]]);

        charts[name] = new Plottable.Components.Table([
            [plots[name]],
            [xAxes[name]]
        ]);
        charts[name].renderTo(("svg#" + name));
       });

      window.addEventListener("resize", function() {
        names.forEach(function(name) { charts[name].redraw(); })
      });
    });
});
