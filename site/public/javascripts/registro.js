window.addEventListener(`load`, () => {

    //Captura de elementos
    let formulario = document.querySelector(`form#formularioRegistro`);
    let inputNombre = document.querySelector(`input#nombre`);
    let inputApellido = document.querySelector(`input#apellido`);
    let inputEmail = document.querySelector(`input#email`);
    let inputPassword = document.querySelector(`input#password`);
    let inputConfirmacion = document.querySelector(`input#confirmacion`);
    let inputImagen = document.querySelector(`input#imagen`);

    //Captura de elementos destinados a mostrar los errores
    let errorNombre = document.querySelector(`span#errorNombre`);
    let errorApellido = document.querySelector(`span#errorApellido`);
    let errorEmail = document.querySelector(`span#errorEmail`);
    let errorPassword = document.querySelector(`span#errorPassword`);
    let errorConfirmacion = document.querySelector(`span#errorConfirmacion`);
    let errorImagen = document.querySelector(`span#errorImagen`);

    //Verificador de imagen y email
    let regExCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputNombre.addEventListener(`keyup`, () => {
        if (inputNombre.value.length < 2) {
            inputNombre.style.borderColor = `red`;
            errorNombre.innerHTML = `Debe tener al menos 2 caracteres`
        } else {
            inputNombre.style.borderColor = `green`;
            errorNombre.innerHTML = ` `
        }
    });
    inputApellido.addEventListener(`keyup`, () => {
        if (inputApellido.value.length < 2) {
            inputApellido.style.borderColor = `red`;
            errorApellido.innerHTML = `Debe tener al menos 2 caracteres`;
        } else {
            inputApellido.style.borderColor = `green`;
            errorApellido.innerHTML = ` `
        }
    });
    inputEmail.addEventListener(`keyup`, () => {
        fetch(`${window.location.origin}/api/users`,{method:`POST`})
            .then(response => response.json())
            .then(usuarios => {
                usuarios.forEach(usuario => {
                    if (usuario.email == inputEmail.value) {
                        inputEmail.style.borderColor = `red`;
                        errorEmail.innerHTML = `Este email ya está registrado`
                    }
                })
            })
    });
    inputEmail.addEventListener(`keyup`, () => {
        if (!regExCorreo.exec(inputEmail.value)) {
            inputEmail.style.borderColor = `red`;
            errorEmail.innerHTML = `Debes ingresar un mail válido`
        } else {
            inputEmail.style.borderColor = `green`;
            errorEmail.innerHTML = ` `
        }
    });
    inputPassword.addEventListener(`keyup`, () => {
        if (inputPassword.value.length < 8) {
            inputPassword.style.borderColor = `red`;
            errorPassword.innerHTML = `Debe tener al menos 8 caracteres`;
        } else {
            inputPassword.style.borderColor = `green`;
            errorPassword.innerHTML = ` `
        }
    });
    inputConfirmacion.addEventListener(`keyup`, () => {
        if (inputConfirmacion.value != inputPassword.value) {
            inputConfirmacion.style.borderColor = `red`;
            errorConfirmacion.innerHTML = `Las contraseñas no coinciden.`;
        } else {
            inputConfirmacion.style.borderColor = `green`;
            errorConfirmacion.innerHTML = ` `
        }
    });
    inputImagen.addEventListener(`change`, () => {
        if (!regExExtensions.exec(inputImagen.value)) {
            inputImagen.style.borderColor = `red`;
            errorImagen.innerHTML = `Formato no admitido`
        } else {
            inputImagen.style.borderColor = `green`;
            errorImagen.innerHTML = ` `
        }
    })

})