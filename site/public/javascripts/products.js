window.addEventListener(`load`, () => {

    //Captura de elementos
    let formulario = document.querySelector(`form#formProducto`);
    let inputMarca = document.querySelector(`input#marca`);
    let inputModelo = document.querySelector(`input#modelo`);
    let inputImagen = document.querySelector(`input#imagen`);
    let textAreaDescripcion = document.querySelector(`textarea#descripcion`);
    let inputPrecio = document.querySelector(`input#precio`);
    let inputDescuento = document.querySelector(`input#descuento`);

    //Captura de elementos destinados a mostrar los errores
    let errorMarca = document.querySelector(`span#errorMarca`);
    let errorModelo = document.querySelector(`span#errorModelo`);
    let errorDescripcion = document.querySelector(`span#errorDescripcion`);
    let errorPrecio = document.querySelector(`span#errorPrecio`);
    let errorDescuento = document.querySelector(`span#errorDescuento`);
    let errorImagen = document.querySelector(`span#errorImagen`);

    //Verificador de extensión de imagen
    let regExExtensions = /(.jpg|.jpeg|.pn|.gif)$/i;


    //Escucha de elementos
    inputMarca.addEventListener(`keyup`, () => {
        if (inputMarca.value.length < 4) {
            inputMarca.style.borderColor = `red`;
            errorMarca.innerHTML = `Debe contener al menos 4 caracteres`;
        } else {
            inputMarca.style.borderColor = `green`;
            errorMarca.innerHTML = ` `;
        }
    });
    inputMarca.addEventListener(`blur`, () => {
        if (inputMarca.value.length < 4) {
            inputMarca.style.borderColor = `red`;
            errorMarca.innerHTML = `Debe contener al menos 4 caracteres`;
        } else {
            inputMarca.style.borderColor = `green`;
            errorMarca.innerHTML = ` `;
        }
    });
    inputModelo.addEventListener(`keyup`, () => {
        if (inputModelo.value.length < 4) {
            inputModelo.style.borderColor = `red`;
            errorModelo.innerHTML = `Debe contener al menos 4 caracteres`;

        } else {
            inputModelo.style.borderColor = `green`;
            errorModelo.innerHTML = ` `;
        }
    });
    inputModelo.addEventListener(`blur`, () => {
        if (inputModelo.value.length < 4) {
            inputModelo.style.borderColor = `red`;
            errorModelo.innerHTML = `Debe contener al menos 4 caracteres`;

        } else {
            inputModelo.style.borderColor = `green`;
            errorModelo.innerHTML = ` `;
        }
    });
    textAreaDescripcion.addEventListener(`keyup`, () => {
        if (textAreaDescripcion.value.length < 20) {
            textAreaDescripcion.style.borderColor = `red`;
            errorDescripcion.innerHTML = `Debe contener al menos 20 caracteres`;
        } else {
            textAreaDescripcion.style.borderColor = `green`;
            errorDescripcion.innerHTML = ` `;
        }
    });
    inputImagen.addEventListener(`change`, () => {
        if (!regExExtensions.exec(inputImagen.value)) {
            inputImagen.style.borderColor = `red`;
            errorImagen.innerHTML = `Formato no compatible`;
        } else {
            inputImagen.style.borderColor = `green`;
            errorImagen.innerHTML = ` `
        }
    })
    inputPrecio.addEventListener(`keyup`, () => {
        if ((inputPrecio.value < 1) || (inputPrecio.value > 99999)) {
            inputPrecio.style.borderColor = `red`;
            errorPrecio.innerHTML = `Precio inválido`;

        } else {
            inputPrecio.style.borderColor = `green`;
            errorPrecio.innerHTML = ` `;
        }
    });
    inputDescuento.addEventListener(`keyup`, () => {
        if(inputDescuento.value < 0){
            inputDescuento.style.borderColor = `red`;
            errorDescuento.style.color = `red`;
            errorDescuento.innerHTML = `Descuento inválido`
            alert(`Descuentos negativos no válidos`)
        }else {
            inputDescuento.style.borderColor = `green`;
            errorDescuento.innerHTML = ` `;
        }
    });
    inputDescuento.addEventListener(`change`, () => {
        if(inputDescuento.value < 0){
            inputDescuento.style.borderColor = `red`;
            errorDescuento.style.color = `red`;
            errorDescuento.innerHTML = `Descuento inválido`
            alert(`Descuentos negativos no válidos`)
        }else {
            inputDescuento.style.borderColor = `green`;
            errorDescuento.innerHTML = ` `;
        }
    });


})
