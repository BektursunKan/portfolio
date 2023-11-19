let open = document.querySelector('.nav-bar') ;
let btn = document.querySelector('.topb');
let button = document.querySelector('.button')
button.innerHTML = 'Наши проекты';
button.addEventListener('click', function() {
    button.classList.toggle('s')
    if(button.classList == 'button s') {
       button.innerHTML = ''; 
    }else  {
    button.innerHTML = 'Наши проекты';

    };
});
console.log(btn.classList)

btn.addEventListener(`click`, function() {
    open.classList.toggle(`open`);
    btn.classList.toggle(`h`)
    console.log(btn.classList)
})