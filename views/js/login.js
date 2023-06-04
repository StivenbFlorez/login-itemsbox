const iconEye = document.querySelector('#icon-eye')
const password = document.querySelector('#password')
const eye = document.querySelector('#eye')

/* animacion del eye */
iconEye.addEventListener('click', () =>{
    if (password.type === 'password'){
        password.type ='text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    } else{
        password.type = 'password'
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
    }

})
