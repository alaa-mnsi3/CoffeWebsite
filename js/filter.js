let Toggle = document.querySelectorAll('.toggle');
let secFilter=document.querySelectorAll(".main-sec8-filterSec")
for(let i=0 ; i<Toggle.length ; i++)
{
    Toggle[i].addEventListener('click',()=>
    {
        Toggle.forEach(tg => {
            tg.classList.remove('active')
        });
        secFilter.forEach(tg => {
            tg.classList.remove('active')
        });
        Toggle[i].classList.add('active');
        secFilter[i].classList.add("active");
    })
}