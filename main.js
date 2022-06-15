var MouseEvent = "empty";
var lastPosition_x, lastPosition_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    MouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentPosition_x = e.clientX - canvas.offsetLeft;
    currentPosition_y = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(lastPosition_x,lastPosition_y);
        ctx.lineTo(currentPosition_x,currentPosition_y);
    
        ctx.stroke();
    }
    lastPosition_x = currentPosition_x;
    lastPosition_y = currentPosition_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    MouseEvent = "mouseup";
}

function clearArea()
{
    ctx.clearRect(0,0,800,600);
}