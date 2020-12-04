
window.addEventListener(`load`, ()=>{

    //Captura de elementos
    let formulario = document.querySelector(`form#formularioLogin`);
    let inputEmail = document.querySelector(`input#email`);
    let inputPassword = document.querySelector(`input#password`);

    //Captura de elementos destinados a mostrar los errores
    let errorEmail = document.querySelector(`span#errorEmail`);
    let errorPassword = document.querySelector(`span#errorPassword`);

    //Verificador de email
    let regExCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    inputEmail.addEventListener(`keyup`, () => {
        if(!regExCorreo.exec(inputEmail.value)){
            inputEmail.style.borderColor = `red`;
            errorEmail.innerHTML = `Email no válido.`
        } else {
            inputEmail.style.borderColor = `green`;
            errorEmail.innerHTML = ` `;
        }
    });
    inputPassword.addEventListener(`keyup`, ()=>{
        if((inputPassword.value.length == 0)){
            inputPassword.style.borderColor = `red`;
            errorPassword.innerHTML = `Longitud de contraseña inválida`
        } else {
            inputPassword.style.borderColor = `green`;
            errorPassword.innerHTML = ` `
        }
    })

})