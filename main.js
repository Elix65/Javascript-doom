const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculo');
const resultado = document.querySelector('#result');
const form = document.querySelector('form')

// btn.addEventListener('click', btnOnclick);



form.addEventListener('submit', sumarInputValues);
    
function sumarInputValues(event) {
    console.log({event})
    event.preventDefault();
    const sumaInpunts = input1.value + input2.value;
    resultado.innerText = "El resultado es" + sumaInpunts;
}
