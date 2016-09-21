var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 5;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function()
{
	var image = context.getImageData(0,0,canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(image, 0,0);
}

//var virtualCanvas = document.createElement('canvas');
//var virtualCtx = virtual

function clearCanvas(canvas)
{
	canvas.width = canvas.width;
}

context.lineWidth = 2*radius;

var putPoint = function(e)
{
	if(dragging)
	{
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2, true);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

var engage = function(e)
{
	dragging = true;
	putPoint(e);
}
var disengage = function()
{
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mousedown', engage);