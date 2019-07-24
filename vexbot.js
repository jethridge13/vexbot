let canvas;
let ctx;
let appWidth;
let appHeight;

function start_app() {
	sizeCanvas();

	let drawSpeed = 30;
	let colorSpeed = 200;
	let ticker = NOOPBOT_TICK_SETUP(draw, drawSpeed);
}