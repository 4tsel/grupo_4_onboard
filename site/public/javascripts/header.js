window.addEventListener(`load`, () => {
    let formBusqueda = document.querySelector(`form#formSearch`);
    let inputBusqueda = document.querySelector(`input#search`);
    let botonBusqueda = document.querySelector(`button#botonSearch`);

    formBusqueda.addEventListener(`submit`, (e)=>{
        e.preventDefault();
        if(inputBusqueda.value.length == 0){
            alert(`Debes escribir la búsqueda en la barra.`)
        } else{
            formBusqueda.submit();
        }
    })

})