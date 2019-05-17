/*******************************************************************
      TWEENMAX
*******************************************************************/

var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");
var particles = [];

function drawScene() {
  canvas.width = png.width*2;
  canvas.height = png.height*2;

  ctx.drawImage(png, 0, 0);

  var data = ctx.getImageData(0, 0, png.width, png.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var y = 0, y2 = data.height; y < y2; y+=2) {
    for (var x = 0, x2 = data.width; x < x2; x+=2) {
        var particle = {
          x0: x,
          y0: y,
          x1: png.width / 2,
          y1: png.height / 2,
          color: "rgb("+data.data[(y * 4 * data.width)+ (x * 4)]+","+data.data[(y * 4 * data.width)+ (x * 4) +1]+","+data.data[(y * 4 * data.width)+ (x * 4) +2]+")",
          speed: Math.random() * 4 + 2
        };
        TweenMax.to(particle, particle.speed, {
          x1: particle.x0,
          y1: particle.y0,
          delay: y / 130,
          ease: Elastic.easeOut
        });
        particles.push(particle);
      }
  }
  requestAnimationFrame(render);
}

var render = function() {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0, j = particles.length; i < j; i++) {
    var particle = particles[i];
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x1*2, particle.y1*2 , 2,1);
  }
};

var png = new Image();
var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");
var particles = [];

function drawScene() {
  canvas.width = png.width*2;
  canvas.height = png.height*2;

  ctx.drawImage(png, 0, 0);

  var data = ctx.getImageData(0, 0, png.width, png.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var y = 0, y2 = data.height; y < y2; y+=2) {
    for (var x = 0, x2 = data.width; x < x2; x+=2) {
        var particle = {
          x0: x,
          y0: y,
          x1: png.width / 2,
          y1: png.height / 2,
          color: "rgb("+data.data[(y * 4 * data.width)+ (x * 4)]+","+data.data[(y * 4 * data.width)+ (x * 4) +1]+","+data.data[(y * 4 * data.width)+ (x * 4) +2]+")",
          speed: Math.random() * 4 + 2
        };
        TweenMax.to(particle, particle.speed, {
          x1: particle.x0,
          y1: particle.y0,
          delay: y / 130,
          ease: Elastic.easeOut
        });
        particles.push(particle);
      }
  }

  requestAnimationFrame(render);

}
var render = function() {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0, j = particles.length; i < j; i++) {
    var particle = particles[i];
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x1*2, particle.y1*2 , 2,2);
  }

};

var png = new Image();
png.src = "data:image/png;base64,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";
