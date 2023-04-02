const container=document.querySelector('#container');


for(let i=0;i<=15;i++)
{
    let row=document.createElement('div');
    row.classList.add('row');

    for(let j=0;j<=15;j++)
    {
       
    let div=document.createElement('div');
    row.appendChild(div);
    div.textContent=" ";
    div.classList.add('square');
    }
    container.appendChild(row);
    
}


const divs=document.querySelectorAll('.square');
divs.forEach(div=> div.addEventListener('mouseenter',()=>div.classList.add('trail')));