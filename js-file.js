const container=document.querySelector('#container');
let content=document.createElement('div');
content.classList.add('content');


let gridSize=16;

let divs=document.querySelectorAll('.square');
drawGrid();
addTrail();



function createRandomRGB()
{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return {r,g,b};
}
function gridSizing(e)
{
    let askInput=window.prompt('Choose the grid size');
    console.log(askInput);
    gridSize=Number(askInput);
    if(gridSize>100)
    {gridSize=100;}
    
    console.log(gridSize);
  
   removeGrid();
    drawGrid();
    addTrail();
}


const button=document.querySelector('#btn');
button.addEventListener('click',gridSizing);



function drawGrid(duplicate)
{
    
    duplicate=content.cloneNode(false);
for(let i=1;i<=gridSize;i++)
{
    let row=document.createElement('div');
    row.classList.add('row');

    for(let j=1;j<=gridSize;j++)
    {
       
    let div=document.createElement('div');
    row.appendChild(div);

    div.textContent=" ";
    div.classList.add('square');
    
   
   
    }
    
    duplicate.appendChild(row);

    
}
const rows=document.querySelectorAll('row');


content=duplicate.cloneNode(true);
container.appendChild(content);

}
addTrail();
function removeGrid()
{
   container.removeChild(content);
   

}



function addTrail()
{
    divs=document.querySelectorAll('.square');
divs.forEach(div=> div.addEventListener('mouseenter',()=>div.classList.add('trail')));
}
function changeColor()
{   
    const {r,g,b}=createRandomRGB();
    divs=document.querySelectorAll('.square');
    divs.forEach(div=> div.addEventListener('mouseenter',()=>{const bgcolor="rgb("+r+","+g+","+b+")";
    div.style.background=bgcolor;}
    
    
    ));}
   
const randomColor=document.querySelector('.randomcolor');
randomColor.addEventListener('click',changeColor);

function changeToDefault()
{
    divs=document.querySelectorAll('.square');
divs.forEach(div=> div.addEventListener('mouseenter',()=>div.style.background='black'));
}
const defaultColor=document.querySelector('.black');
defaultColor.addEventListener('click',changeToDefault);

function erase()
{
    divs=document.querySelectorAll('.square');
divs.forEach(div=> div.addEventListener('mouseenter',()=>div.style.background='white'));
}
const eraser=document.querySelector('.eraser');
eraser.addEventListener('click',erase);
