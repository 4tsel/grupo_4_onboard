window.addEventListener(`load`, () => {

    //Captura de elementos
    let formProducto = document.querySelector(`form#formProducto`);
    let inputMarca = document.querySelector(`input#marca`);
    let inputModelo = document.querySelector(`input#modelo`);
    let inputImagen = document.querySelector(`input#imagen`);
    let textAreaDescripcion = document.querySelector(`textarea#descripcion`);
    let inputPrecio = document.querySelector(`input#precio`);
    let inputDescuento = document.querySelector(`input#descuento`);
    let inputBorrarImagen = document.querySelector(`input#borrar`);
    let vistaPrevia = document.querySelector(`img#vistaPrevia`);

    //Captura de elementos destinados a mostrar los errores
    let errorMarca = document.querySelector(`span#errorMarca`);
    let errorModelo = document.querySelector(`span#errorModelo`);
    let errorDescripcion = document.querySelector(`span#errorDescripcion`);
    let errorPrecio = document.querySelector(`span#errorPrecio`);
    let errorDescuento = document.querySelector(`span#errorDescuento`);
    let errorImagen = document.querySelector(`span#errorImagen`);

    //Captura de errores por input
    let errorInputMarca;
    let errorInputModelo;
    let errorTextAreaDescripcion;
    let errorInputImagen;
    let errorInputPrecio;
    let errorInputDescuento;

    //Verificador de extensión de imagen
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    //Escucha de elementos
    inputMarca.addEventListener(`keyup`, () => {
        if (inputMarca.value.length < 4) {
            inputMarca.style.borderColor = `red`;
            errorMarca.innerHTML = `Debe contener al menos 4 caracteres`;
            errorInputMarca = true;
        } else {
            inputMarca.style.borderColor = `green`;
            errorMarca.innerHTML = ` `;
            errorInputMarca = false;
        }
    });
    inputModelo.addEventListener(`keyup`, () => {
        if (inputModelo.value.length < 4) {
            inputModelo.style.borderColor = `red`;
            errorModelo.innerHTML = `Debe contener al menos 4 caracteres`;
            errorInputModelo = true;
        } else {
            inputModelo.style.borderColor = `green`;
            errorModelo.innerHTML = ` `;
            errorInputModelo = false;
        }
    });
    textAreaDescripcion.addEventListener(`keyup`, () => {


        if (textAreaDescripcion.value.length < 20) {
            textAreaDescripcion.style.borderColor = `red`;
            errorDescripcion.innerHTML = `Debe contener al menos 20 caracteres`;
            errorTextAreaDescripcion = true;
        } else {
            textAreaDescripcion.style.borderColor = `green`;
            errorDescripcion.innerHTML = ` `;
            errorTextAreaDescripcion = false;
        }
    });
    inputImagen.addEventListener(`change`, (e) => {
        if (!regExExtensions.exec(inputImagen.value)) {
            inputImagen.style.borderColor = `red`;
            errorImagen.innerHTML = `Este formato no es admitido`;
            vistaPrevia.src = ` `;
            errorInputImagen = true;
        }else {
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
        
        if(errorInputImagen == true){
            errorInputImagen = false;
        }
        inputImagen.style.borderColor = `transparent`;
        errorImagen.innerHTML = ` `;
        vistaPrevia.src = `/img/products/default.jpg`;

    });
    inputPrecio.addEventListener(`keyup`, () => {
        if ((inputPrecio.value < 1) || (inputPrecio.value > 99999.99)) {
            inputPrecio.style.borderColor = `red`;
            errorPrecio.innerHTML = `Precio inválido`;
            errorInputPrecio = true;

        } else {
            inputPrecio.style.borderColor = `green`;
            errorPrecio.innerHTML = ` `;
            errorInputPrecio = false;
        }
    });
    inputDescuento.addEventListener(`keyup`, () => {
        if (inputDescuento.value < 0) {
            inputDescuento.style.borderColor = `red`;
            errorDescuento.innerHTML = `Descuento inválido`
            errorInputDescuento = true;

        } else if (inputDescuento.value >= 0 || inputDescuento.value == undefined) {
            inputDescuento.style.borderColor = `green`;
            errorDescuento.innerHTML = ` `;
            errorInputDescuento = false;
        }
    });
    formProducto.addEventListener(`submit`, (e) => {
        e.preventDefault()
        if ((errorInputMarca == true) || (errorInputModelo == true) || (errorTextAreaDescripcion == true) || (errorInputImagen == true) || (errorInputPrecio == true) || (errorInputDescuento == true)) {
            alert(`Revise el formulario, por favor.`);
        } else {
            formProducto.submit();
        }
    });
})
