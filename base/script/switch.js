const buttons = document.querySelectorAll('.product-button');
const units = document.querySelectorAll('.product-unit');
const closeButton = document.querySelectorAll('.transparent-button');

if(document.documentElement.clientWidth > 991){
    units[0].classList.add('active');
}else {
    units[0].classList.remove('active');
    closeButton.forEach( closeButton =>{
        closeButton.addEventListener('click', () => {
            closeButton.closest('.product-unit').classList.remove('active');
        })
    })
}


buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(document.documentElement.clientWidth > 991) {
            units.forEach(units => {
                units.classList.remove('active')
            });
            button.closest('.product-unit').classList.add('active');
        } else{
            button.closest('.product-unit').classList.toggle('active');
        }
    })
})