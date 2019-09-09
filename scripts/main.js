var btn = document.querySelector('.mainheader__btn');
var nav = document.querySelector('.mainheader__nav');

function handleClick(){
    nav.classList.toggle('mainheader__nav--active');
}

btn.addEventListener('click', handleClick);