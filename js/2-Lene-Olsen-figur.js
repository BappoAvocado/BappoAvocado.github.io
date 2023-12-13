const canvas = document.getElementById("is_114_JS-art");
const ctx = canvas.getContext('2d');

function drawRectangle(x, y, color, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawEllipse(x, y, color, rx, ry) {
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawCircle(x, y, color, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawText(x, y, text, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function eye() {
drawRectangle(0, 0, '#03fcfc', 200, 200);
drawEllipse(100, 100, '#402d1cff', 63, 32);
drawEllipse(100, 100, '#faf5f5ff', 55, 30);
drawCircle(100, 100, '#402d1cff', 28);
drawCircle(100, 100, '#038c3cff', 26);
drawCircle(97, 105, '#8bf760ff', 14);
drawCircle(98, 103, '#038c3cff', 15);
drawCircle(100, 100, '#000000ff', 12);
drawCircle(97, 104, '#ffffffff', 4);
drawCircle(99, 102, '#000000ff', 4);
drawCircle(112, 85, '#ffffffff', 2);
}


eye();

canvas.addEventListener("mousemove", function (e) {
var x = e.pageX - canvas.offsetLeft;
var y = e.pageY - canvas.offsetTop;

clearCanvas();


eye();


drawText(x, y, "Hello World!", "20px Arial", '#ed09a1');
});