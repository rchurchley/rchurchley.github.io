document.addEventListener("DOMContentLoaded", function(event) {

  var xScale = new Plottable.Scales.Linear().domain([1916, 2015]);
  var yScale = new Plottable.Scales.Linear().domain([-2.5, 2.5]);
  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");

  var names = [
    "CHRISTOPHER", "CHRISTIAN", "KRISTOPHER", "CHRIS", "KRIS",
    "CHRISTINE", "CHRISTINA", "KRISTINA", "KRISTINE", "KRISTY", "CHRISTIE", "CHRISTY", "CHRISTA", "CHRISTIANA"
  ]

  var series = new Plottable.Scales.Color()
    .domain(names)
    .range([
      "#93c6fa", "#459df6", "#0b74de", "#074b90", "#032342",
      "#fee1ef", "#fdb9db", "#fc92c7", "#fa6ab2", "#e30775","#bb0661", "#94054c", "#6c0338","#450223"
    ])

  var legend = new Plottable.Components.Legend(series)
    .maxEntriesPerRow(5)
    .xAlignment("center")
    .yAlignment("center");

  d3.csv("/blog/whats-in-a-name/data-historical-aggregate.csv")
    .get(function(error, data) {
      var fPlot = new Plottable.Plots.StackedArea()
        .x(function(d) { return d.DATE; }, xScale)
        .y(function(d, i, dataset) {
            return d[dataset.metadata() + "_F"];
        }, yScale)
        .attr("fill", function(d, i, dataset) {
            return dataset.metadata();
        }, series);

      names.forEach(function(name) {
        fPlot.addDataset(new Plottable.Dataset(data).metadata(name));
      });

      var mPlot = new Plottable.Plots.StackedArea()
        .x(function(d) { return d.DATE; }, xScale)
        .y(function(d, i, dataset) {
            return -d[dataset.metadata() + "_M"];
        }, yScale)
        .attr("fill", function(d, i, dataset) {
            return dataset.metadata();
        }, series);

      names.forEach(function(name) {
        mPlot.addDataset(new Plottable.Dataset(data).metadata(name));
      });

    var plots = new Plottable.Components.Group([fPlot, mPlot]);

    var chart = new Plottable.Components.Table([
      [plots],
      [xAxis],
      [legend]
    ]);

    chart.renderTo(("svg#chris-historical"));

    window.addEventListener("resize", function() {
      chart.redraw();
    });
  });
});
