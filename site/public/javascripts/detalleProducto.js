window.addEventListener(`load`, () => {
    let inputPrecioCuotas = document.querySelector(`h2#precioCuotas`);
    let selectCuotas = document.querySelector(`select#cuotas`);
    let inputPrecio = document.querySelector(`input#precio`);

    selectCuotas.addEventListener(`change`, () => {
        if(selectCuotas.value > 0){
            let calculo = inputPrecio.value / selectCuotas.value
            inputPrecioCuotas.innerHTML = `${selectCuotas.value} cuota/s de $${calculo.toFixed(2)}`;
        } else {
            inputPrecioCuotas.innerHTML = ` `;
        }
    })
})