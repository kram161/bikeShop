const inputsButton = document.querySelectorAll('.input-button')


inputsButton.forEach(button => {
    button.addEventListener('click', () =>{
        const input = (button.closest('.product-input')).querySelector('.input-text');
        if(input.value !== ''){
            input.classList.remove('error')
        }else{
            input.classList.add('error')
        }
    })
})