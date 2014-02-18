(function(window) {

var canvas, i, j;
var COLORS = ['#7FDBFF', '#0074D9', '#001F3F', '#39CCCC', '#2ECC40', '#3D9970', '#01FF70'];

function randOpacity() {
  return 1 - Math.random() / 2;
}

function randIndex(length) {
  return Math.floor(Math.random() * length);
}

function randColor() {
  return COLORS[randIndex(COLORS.length)];
}

function animateFx() {
  canvas.selectAll('rect')
      .transition()
      .duration(800)
      .attr('fill-opacity', randOpacity)
      .each('end', function() {
        setTimeout(animateFx, 1000);
      });
}

canvas = d3.select('body').append('svg')
              .attr('width', 400)
              .attr('height', 400);

for (i = 0; i < 4; i ++) {
  for (j = 0; j < 4; j ++) {
    canvas.append('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('x', 100 * i)
      .attr('y', 100 * j)
      .attr('fill', randColor())
      .attr('fill-opacity', randOpacity());
  }
}

setTimeout(animateFx, 1000);


})(window);