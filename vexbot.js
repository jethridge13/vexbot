let canvas;
let ctx;
let appWidth;
let appHeight;

let colors = ['#ff00a2','#00baff','#ff6c00', '#f1f1f1'];

function start_app() {
	sizeCanvas();

	let drawSpeed = 30;

	//get the data!
	// TODO Decide what to do with the callback
  	NOOPBOT_FETCH({
  	  API: 'vexbot',
  	  count: 1000,
  	  width: appWidth,
  	  height: appHeight,
  	  magnitude: 24,
  	  connected: 1
  	}, draw);

  	// TODO Determine what function should run each tick
	let ticker = NOOPBOT_TICK_SETUP(draw, drawSpeed);
}

function draw(responseJson) {
	NOOPBOT_SETUP_CANVAS({ canvas: canvas, bgColor:NOOPBOT_DECIDE(colors) });

	let { vectors } = responseJson;
}

function drawSet(responseJson) {
  //clean the canvas. comment out to let them build up.
  NOOPBOT_SETUP_CANVAS({ canvas: canvas, bgColor:NOOPBOT_DECIDE(colors) });

  let { vectors } = responseJson;
  vectors.forEach(function(vector) {
    drawVector(ctx, vector);
  })
}

function drawVector(ctx, points) {

  // randomly choose fill color and alpha
  ctx.strokeStyle = NOOPBOT_DECIDE(colors);
  ctx.globalAlpha = NOOPBOT_RANDOM(0,100)/100;
  ctx.lineWidth = NOOPBOT_RANDOM(1,2);
  let {a, b} = points;

  // draw line
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);

  // stroke line
  ctx.stroke();

}