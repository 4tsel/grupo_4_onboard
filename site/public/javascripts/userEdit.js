window.addEventListener(`load`, () => {

    //Captura de elementos
    let formEditar = document.querySelector(`form#editar`)
    let formEliminar = document.querySelector(`form#eliminar`);
    let inputImagen = document.querySelector(`input#imagen`);
    let inputBorrarImagen = document.querySelector(`input#borrar`);
    let vistaPrevia = document.querySelector(`img#vistaPrevia`);

    //Captura de elementos destinados a mostrar los errores
    let errorImagen = document.querySelector(`span#errorImagen`);

    //Captura de errores por input
    let errorInputImagen;

    //Verificador de imagen
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    //Escucha de elementos
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
        errorImagen.innerHTML = ` `
        fetch(`${window.location.origin}/api/datos`, {method: `POST`})
            .then(response => response.json())
            .then(resultado => {
                vistaPrevia.src = `/img/users/${resultado.avatar}`
            })
    });
    
    formEditar.addEventListener(`submit`, (e) => {
        e.preventDefault();
        if(errorInputImagen == false || errorInputImagen == null){
            alert(`Los cambios se aplicarán al volver a iniciar sesión.`);
            formEditar.submit();
        } else {
            alert(`Por favor, revise errores en el formulario.`)
        }
    })
    formEliminar.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let confirmacion = prompt(`Ingrese su contraseña`);
        console.log(confirmacion)
        fetch(`${window.location.origin}/api/datos`, { method: `POST` })
            .then(response => response.json())
            .then(usuario => {
                if (usuario.password == confirmacion) {
                    formEliminar.submit();
                } else {
                    alert(`contraseña incorrecta`);
                }
            })
    })

})