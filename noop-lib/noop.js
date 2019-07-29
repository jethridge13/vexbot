function sizeCanvas() {
	appWidth = window.innerWidth;
	appHeight = window.innerHeight;
	canvas = document.getElementById('canvas');
	ctx = NOOPBOT_SETUP_CANVAS( { canvas: canvas, bgColor: '#000000' });
}

// listen if browser changes size.
window.onresize = function(event){
  sizeCanvas();
  draw();
};