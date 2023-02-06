console.log ("Cadastro JS")

const inputCep = document.querySelector('#zipcode');
const inputEstado = document.querySelector ('#departments');
const inputCidade = document.querySelector ('#Cidade');
const inputRua = document.querySelector('#Rua');
const inputBairro = document.querySelector('#Bairro');

const loadingSpinner = document.querySelector('.loading');

let loading = false

const BRASIL_API_BASE_URL = 'https://brasilapi.com.br/api';
const CONFIG = {
    method: 'GET',
    headers: {
       'Contente-type': 'application/json',

    }
};

inputCep.addEventListener('keypress' ,  verificarTamanhoCep);
inputCep.addEventListener('blur', fetchData)

function  verificarTamanhoCep(event) {
    console.log(event.target.value.length);
    if(event.target.value.length > 7) {
        event.preventDefault();
    }
}


async function fetchData () {
    const numero = inputCep.value;
    loading = true;
    handleLoading();

    const response = await fetch(`${BRASIL_API_BASE_URL}/cep/v1/${numero}`, CONFIG);

    const data = await response.json ();
    console.log (data);

    const {city, neighborhood, state, street } = data;

    inputEstado.value = state;
    inputCidade.value = city;
    inputRua.value = street;
    inputBairro.value = neighborhood;


    loading = false;
    handleLoading();


}

function handleLoading () {
    if (loading) {
        loadingSpinner. classList.add('active');
    } else { loadingSpinner. classList.remove('active');

    }

}