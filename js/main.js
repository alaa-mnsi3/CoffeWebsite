let navHeader=document.getElementById('nav');
let mainSec5=document.querySelector('.main-sec5');
let nums=document.querySelectorAll('.num');
let started = false;

console.log(navHeader)

window.onscroll=()=>
{
    // sticky navbar
    if(window.scrollY > 0)
    {
        navHeader.style.backgroundColor='var(--first-additional-color)';
    }
    if(window.scrollY >= (mainSec5.offsetTop-400))
    {
        // if not started
        if(!started)
        {
            console.log("alaa")
            nums.forEach(num => interval(num))
        }
        started = true
    }
    else if (window.scrollY === 0)
    {
        navHeader.style.backgroundColor='transparent';
    }
}

//function for animate counter
function interval(elem)
{
    let goal = +elem.dataset.num;
    let speed= (3500/goal)
    console.log(speed)
    let intervalBranch =setInterval(()=>{
        elem.textContent=+(elem.textContent.toLocaleString())+1;
        if(+elem.textContent === goal)
        {
            clearInterval(intervalBranch)
        }
    },speed)
}