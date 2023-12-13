const el=document.getElementById('myCanvas');
const ctx=el.getContext('2d');

//Fant denne på en video :O
myCanvas.addEventListener("mousemove",function(info){
    const x=info.offsetX;
    const y=info.offsetY;

    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2);
    ctx.stroke();
});




//TopLeft:
//Colors:

//TLBase
function drawRectangle(color) {
ctx.beginPath()
ctx.rect(0, 0, 100, 100);
ctx.fillStyle=color;
ctx.fill();
}
drawRectangle('green');

//Neck:
//Neck Color:
ctx.beginPath()
ctx.rect(40, 80, 27, 20);
ctx.fillStyle="orange"
ctx.fill();
//Neck Outline 1:
ctx.beginPath()
ctx.rect(40, 80, 3, 20);
ctx.fillStyle="black"
ctx.fill();
//Neck Outline 2:
ctx.beginPath()
ctx.rect(66, 80, 3, 20);
ctx.fillStyle="black"
ctx.fill();

//Face:
//Face Outline:
ctx.beginPath()
ctx.arc(52, 65, 25, 0, 2*Math.PI);
ctx.fillStyle="black"
ctx.fill();
//Face Color:
ctx.beginPath()
ctx.arc(52, 65, 22, 0, 2*Math.PI);
ctx.fillStyle="orange"
ctx.fill();

//Face Details:
//Nose:
ctx.beginPath()
ctx.arc(49, 69, 4, 0, 2*Math.PI);
ctx.fillStyle="black"
ctx.fill();
//Mouth:
ctx.beginPath()
ctx.rect(50, 80, 7, 2);
ctx.fillStyle="black"
ctx.fill();
//Left Eye:
ctx.beginPath()
ctx.arc(42, 55, 3, 0, 2*Math.PI);
ctx.fillStyle="black"
ctx.fill();
//Right Eye:
ctx.beginPath()
ctx.arc(60, 55, 3, 0, 2*Math.PI);
ctx.fillStyle="black"
ctx.fill();
//Whisker 1:
ctx.save();
ctx.beginPath()
ctx.rotate((20 * Math.PI) / 180);
ctx.rect(57, 45, 7, 2);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();
//Save/Restore is used to limit the rotation to only this rectangle, not all the code under the command.
//Whisker 2:
ctx.save();
ctx.beginPath()
ctx.rotate((20 * Math.PI) / 180);
ctx.rect(75, 47, 7, 2);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();
//Whisker 3: 
ctx.save();
ctx.beginPath()
ctx.rotate((-20 * Math.PI) / 180);
ctx.rect(28, 79, 7, 2);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();
//Whisker 4:
ctx.save();
ctx.beginPath()
ctx.rotate((-20 * Math.PI) / 180);
ctx.rect(10, 82, 7, 2);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();
//Whisker 5:
ctx.beginPath()
ctx.rect(55, 67, 7, 2);
ctx.fillStyle="black"
ctx.fill();
//Whisker 6:
ctx.beginPath()
ctx.rect(37, 67, 7, 2);
ctx.fillStyle="black"
ctx.fill();

//Left Ear:
//Left Ear Color:
ctx.save();
ctx.beginPath()
ctx.rotate((-40 * Math.PI) / 180);
ctx.rect(-5, 52, 6, 7);
ctx.fillStyle="orange"
ctx.fill();
ctx.restore();
//Left Ear Outline 1:
ctx.save();
ctx.beginPath()
ctx.rotate((-60 * Math.PI) / 180);
ctx.rect(-20, 45, 4, 12);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();
//Left Ear Outline 2:
ctx.save();
ctx.beginPath()
ctx.rotate((-7 * Math.PI) / 180);
ctx.rect(24, 43, 4, 12);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();

//Right Ear:
//Right Ear Color:
ctx.save();
ctx.beginPath()
ctx.rotate((50 * Math.PI) / 180);
ctx.rect(81, -28, 6, 6);
ctx.fillStyle="orange"
ctx.fill();
ctx.restore();
//Right Ear Outline 1:
ctx.save();
ctx.beginPath()
ctx.rotate((25 * Math.PI) / 180);
ctx.rect(87, 6, 4, 12);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();
//Right Ear Outline 2: 
ctx.save();
ctx.beginPath()
ctx.rotate((65 * Math.PI) / 180);
ctx.rect(70, -54, 4, 12);
ctx.fillStyle="black"
ctx.fill();
ctx.restore();








//TopRight:
ctx.beginPath()
ctx.rect(100, 0, 100, 100);
ctx.fillStyle="brown"
ctx.fill();


//BottomLeft:
ctx.beginPath()
ctx.rect(0, 100, 100, 100);
ctx.fillStyle="blue"
ctx.fill();


//BottomRight:
ctx.beginPath()
ctx.rect(100, 100, 100, 100);
ctx.fillStyle="red"
ctx.fill();