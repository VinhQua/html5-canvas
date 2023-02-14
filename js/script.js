const clearAll = document.querySelector('#clear-all');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin ='round';
ctx.lineCap ='round';
let direction = true;

ctx.lineWidth = 10;
let lastX = 0;
let LastY = 0;
let isDrawing = false;
let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
const draw = function(e){
    if (!isDrawing === true) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX,LastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    [lastX, LastY] = [e.offsetX,e.offsetY];
    hue++
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    console.log(direction);
    if (direction){
        ctx.lineWidth++;
    } else{
        ctx.lineWidth--;
    }
};


canvas.addEventListener('mousedown',function(e){
    isDrawing = true;
    lastX = e.offsetX;
    LastY = e.offsetY;
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing=false);
canvas.addEventListener('mouseout',()=> isDrawing=false);
clearAll.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
})