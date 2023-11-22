

const el=document.getElementById('IsakCanvas');
const ctx=el.getContext('2d');

ctx.beginPath()
ctx.rect(0, 0, 200, 200);
ctx.fillStyle="pink"
ctx.fill();

ctx.beginPath()
ctx.arc(20, 50, 15, 0, 2*Math.PI);
ctx.fillStyle="black"
ctx.fill();

ctx.beginPath()
ctx.arc(60, 50, 15, 0, 2*Math.PI);
ctx.fillStyle="black"
ctx.fill();

ctx.beginPath()
ctx.arc(100, 50, 15, 0, 2*Math.PI);
ctx.fillStyle="black"
ctx.fill();