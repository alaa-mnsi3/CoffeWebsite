let navHeader=document.getElementById('nav');
console.log(navHeader)
window.onscroll=()=>
{
    console.log(window.scrollY)
    if(window.scrollY>0)
    {
        navHeader.style.backgroundColor='var(--primary-text-color)';
        navHeader.style.border='none'
    }
    else
    {
        navHeader.style.backgroundColor='transparent';
    }
}