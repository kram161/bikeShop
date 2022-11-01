const buttons = document.querySelectorAll('.product-button');
const units = document.querySelectorAll('.product-unit');

units[0].classList.add('active');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        units.forEach( units =>{
            units.classList.remove('active')
        });
        button.closest('.product-unit').classList.add('active');
    })
})