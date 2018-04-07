window.onload = function() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	

	context.fillStyle = "aquamarine";
	context.beginPath();
	context.arc(220, 330, 60, 0, Math.PI*8, true);
	// arc(x, y, tamaño, idk, formula circulo)
	context.closePath();
	context.fill();
};