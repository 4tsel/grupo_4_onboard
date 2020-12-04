window.addEventListener(`load`, () => {

    let formCategoria = document.querySelector(`form#formCategoria`);
    let inputNombre = document.querySelector(`input#name`);
   

    let errorNombre = document.querySelector(`span#errorNombre`);
    let errorIcono = document.querySelector(`span#errorIcono`);

    let errorInputNombre;

    inputNombre.addEventListener(`keyup`, () => {
        fetch(`${window.location.origin}/api/categories`, { method: `POST` })
            .then(response => response.json())
            .then(categorias => {
                categorias.forEach(categoria => {
                    if (categoria.nombre == inputNombre.value) {
                        inputNombre.style.borderColor = `red`;
                        errorNombre.innerHTML = `Nombre de categoría en uso.`;
                        errorInputNombre = true;
                    }
                })
            })
    });
    
    inputNombre.addEventListener(`keyup`, () => {
        if (inputNombre.value.length < 2) {
            inputNombre.style.borderColor = `red`;
            errorNombre.innerHTML = `El nombre debe tener al menos dos caracteres.`
            errorInputNombre = true;
        } else {
            inputNombre.style.borderColor = `green`;
            errorNombre.innerHTML = ``;
            errorInputNombre = false;
        }
    });
    
    formCategoria.addEventListener(`submit`, (e) => {
        e.preventDefault();

        let inputIcono = document.querySelectorAll(`input[name="icon"]`);
        let iconoSeleccionado;

        for(let icono of inputIcono){
            if(icono.checked){
                iconoSeleccionado = icono.value;
                break;
            }
        }

        if(errorInputNombre == true || iconoSeleccionado == undefined){
            alert(`Revise el formulario, por favor`);
            errorIcono.innerHTML = `Debe seleccionar un ícono.`
        } else {
            formCategoria.submit();
        }
    })


})