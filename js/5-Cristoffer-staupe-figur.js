// Defining some constants
const canvas = document.getElementById("christoffer-figur");
const ctx = canvas.getContext("2d");

// Function for drawing a circle with canvas
function circle(radius, mode, color, x, y) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle
    if (mode == "solid") {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}


// Function for drawing rectangles
function rectangle(height, width, x, y, mode, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

// Drawing rectangles with different parameters
rectangle(200, 200, 0, 0, "solid", "blue");
rectangle(10, 80, 60, 140, "solid", "red");
rectangle(18, 20, 90, 95, "solid", "black");



// Drawing circles with different parameters
circle(20, "solid", "red", 140, 70);
circle(20, "solid", "red", 60, 70);

// Drawing with SVG

// Function for rectangle in SVG

function rectangleSvg(x, y, width, height, style, id) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("style", style);

    document.getElementById(id).appendChild(rect);
}

// Function for circle in SVG
function circleSvg(x, y, r, style, id) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("style", style);

    document.getElementById(id).appendChild(circle);
}

// Drawing rectangles and circles in different sizes and positions
rectangleSvg(0, 0, 200, 200, "fill:blue", "svg");
rectangleSvg(95, 95, 20, 20, "fill:black", "svg");
rectangleSvg(65, 140, 83, 10, "fill:red", "svg");

circleSvg(65, 70, 20, "fill:red", "svg");
circleSvg(140, 70, 20, "fill:red", "svg");