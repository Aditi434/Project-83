var mouse_Event="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
color="black";
ctx=canvas.getContext("2d");
width_of_line=2;
var width=screen.width;
new_width=screen.width - 70;
new_height=screen.height - 300;

if (width < 992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchsart", mytouchsart);
function mytouchsart(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", mytouchMove);
function mytouchMove(e)
{
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath;
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth= document.getElementById("width_of_line").value;
    console.log("x=" + last_position_of_x + "y=" + last_position_of_y); 
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("x=" + current_position_of_x + "y=" + current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
}
function clear1()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


