const canvas = document.getElementById("is_114_art")
const ctx = canvas.getContext('2d');
   
 

        ctx.fillStyle = '#03fcfc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
		
 ctx.beginPath();
        ctx.ellipse(100, 100, 63, 32, 0, 0, 2 * Math.PI);
        ctx.fillStyle = '#402d1c';
        ctx.fill();
        ctx.closePath();
		
 ctx.beginPath();
        ctx.ellipse(100, 100, 55, 30, 0, 0, 2 * Math.PI);
        ctx.fillStyle = '#faf5f5';
        ctx.fill();
        ctx.closePath();

ctx.beginPath();
        ctx.arc(100, 100, 28, 0, 2 * Math.PI);
        ctx.fillStyle = '#402d1c'; // mørk sirkel
        ctx.fill();
        ctx.closePath();
		

  ctx.beginPath();
        ctx.arc(100, 100, 26, 0, 2 * Math.PI);
        ctx.fillStyle = '#038c3c'; // grønn sirkel
        ctx.fill();
        ctx.closePath();

  ctx.beginPath();
        ctx.arc(97, 105, 14, 0, 2 * Math.PI);
        ctx.fillStyle = '#8bf760'; // grønn2 sirkel
        ctx.fill();
        ctx.closePath();
		

ctx.beginPath();
        ctx.arc(98, 103, 15, 0, 2 * Math.PI);
        ctx.fillStyle = '#038c3c'; // grønn sirkel
        ctx.fill();
        ctx.closePath();
		
ctx.beginPath();
        ctx.arc(100, 100, 12, 0, 2 * Math.PI);
        ctx.fillStyle = '#000000'; // sort sirkel
        ctx.fill();
        ctx.closePath();

ctx.beginPath();
        ctx.arc(97, 104, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff'; // hvit sirkel
        ctx.fill();
        ctx.closePath();
		
ctx.beginPath();
        ctx.arc(99, 102, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#000000'; // sort sirkel
        ctx.fill();
        ctx.closePath();
	
	ctx.beginPath();
        ctx.arc(112, 85, 2, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff'; // hvit sirlek
        ctx.fill();
        ctx.closePath();