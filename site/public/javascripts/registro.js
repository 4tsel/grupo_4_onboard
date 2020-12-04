window.addEventListener(`load`, () => {

    //Captura de elementos
    let formRegistro = document.querySelector(`form#formularioRegistro`);
    let inputNombre = document.querySelector(`input#nombre`);
    let inputApellido = document.querySelector(`input#apellido`);
    let inputEmail = document.querySelector(`input#email`);
    let inputPassword = document.querySelector(`input#password`);
    let inputConfirmacion = document.querySelector(`input#confirmacion`);
    let inputImagen = document.querySelector(`input#imagen`);
    let inputBorrarImagen = document.querySelector(`input#borrar`);
    let vistaPrevia = document.querySelector(`img#vistaPrevia`);

    //Captura de elementos destinados a mostrar los errores
    let errorNombre = document.querySelector(`span#errorNombre`);
    let errorApellido = document.querySelector(`span#errorApellido`);
    let errorEmail = document.querySelector(`span#errorEmail`);
    let errorPassword = document.querySelector(`span#errorPassword`);
    let errorConfirmacion = document.querySelector(`span#errorConfirmacion`);
    let errorImagen = document.querySelector(`span#errorImagen`);

    //Captura de errores por input
    let errorInputNombre;
    let errorInputApellido;
    let errorInputEmail;
    let errorInputPassword;
    let errorInputConfirmacionPass;
    let errorInputImagen;

    //Verificador de imagen y email
    let regExCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    //Escucha de elementos
    inputNombre.addEventListener(`keyup`, () => {
        if (inputNombre.value.length < 2) {
            inputNombre.style.borderColor = `red`;
            errorNombre.innerHTML = `Debe tener al menos 2 caracteres`;
            errorInputNombre = true;
        } else {
            inputNombre.style.borderColor = `green`;
            errorNombre.innerHTML = ` `;
            errorInputNombre = false;
        }
    });
    inputApellido.addEventListener(`keyup`, () => {
        if (inputApellido.value.length < 2) {
            inputApellido.style.borderColor = `red`;
            errorApellido.innerHTML = `Debe tener al menos 2 caracteres`;
            errorInputApellido = true;
        } else {
            inputApellido.style.borderColor = `green`;
            errorApellido.innerHTML = ` `;
            errorInputApellido = false;
        }
    });
    inputEmail.addEventListener(`keyup`, () => {
        fetch(`${window.location.origin}/api/users`, { method: `POST` })
            .then(response => response.json())
            .then(usuarios => {
                usuarios.forEach(usuario => {
                    if (usuario.email == inputEmail.value) {
                        inputEmail.style.borderColor = `red`;
                        errorEmail.innerHTML = `Este email ya está registrado`;
                        errorInputEmail = true;
                    }
                })
            })
    });
    inputEmail.addEventListener(`keyup`, () => {
        if (!regExCorreo.exec(inputEmail.value)) {
            inputEmail.style.borderColor = `red`;
            errorEmail.innerHTML = `Debes ingresar un mail válido`;
            errorInputEmail = true;
        } else {
            inputEmail.style.borderColor = `green`;
            errorEmail.innerHTML = ` `;
            errorInputEmail = false;
        }
    });
    inputPassword.addEventListener(`keyup`, () => {
        if (inputPassword.value.length < 8) {
            inputPassword.style.borderColor = `red`;
            errorPassword.innerHTML = `Debe tener al menos 8 caracteres`;
            errorInputPassword = true;
        } else {
            inputPassword.style.borderColor = `green`;
            errorPassword.innerHTML = ` `;
            errorInputPassword = false;
        }
    });
    inputConfirmacion.addEventListener(`keyup`, () => {
        if (inputConfirmacion.value != inputPassword.value) {
            inputConfirmacion.style.borderColor = `red`;
            errorConfirmacion.innerHTML = `Las contraseñas no coinciden.`;
            errorInputConfirmacionPass = true;
        } else {
            inputConfirmacion.style.borderColor = `green`;
            errorConfirmacion.innerHTML = ` `;
            errorInputConfirmacionPass = false;
        }
    });
    inputImagen.addEventListener(`change`, (e) => {
        if (!regExExtensions.exec(inputImagen.value)) {
            inputImagen.style.borderColor = `red`;
            errorImagen.innerHTML = `Formato no admitido`;
            vistaPrevia.src = ` `;
            errorInputImagen = true;
        } else {
            inputImagen.style.borderColor = `green`;
            errorImagen.innerHTML = ` `;
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
                vistaPrevia.src = reader.result;
            }
            errorInputImagen = false;
        }
    });
    inputBorrarImagen.addEventListener(`click`, () => {
        inputImagen.value = null;

        if (errorInputImagen == true) {
            errorInputImagen = false;
        }
        inputImagen.style.borderColor = `transparent`;
        errorImagen.innerHTML = ` `;
        vistaPrevia.src = `/img/users/default.png`;
    });
    formRegistro.addEventListener(`submit`, (e) => {
        e.preventDefault();
        if ((errorInputNombre == true) || (errorInputApellido == true) || (errorInputEmail == true) || (errorInputPassword == true) || (errorInputConfirmacionPass == true) || (errorInputImagen == true)) {
            alert(`Revise el formulario, por favor.`);
        } else {
            formRegistro.submit();
        }
    });
})