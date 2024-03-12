let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 3;

function VerificarIntento(){
    let numerodelusuario = parseInt(document.getElementById('intentodelusuario').value);
    console.log(numerodelusuario);
    console.log(typeof(numerodelusuario));
    console.log(numeroSecreto);
    console.log(numeroSecreto == numerodelusuario);
    console.log(intentos);
    if(numeroSecreto === numerodelusuario){
        texto('p', `Acertaste el numero correcto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        LimpiarCaja();
    } else {
        if(numeroSecreto > numerodelusuario){
        texto('p', 'El numero debe ser mayor');
        } 
        if(numeroSecreto < numerodelusuario){
        texto('p', 'El numero debe ser menor');
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function Reiniciarjuego(){
    LimpiarCaja();
    CondicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function texto(elemento, texto){
    let elementotexto = document.querySelector(elemento);
    elementotexto.innerHTML = texto;
}

function GetNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*3)+1;

    if(listaNumeroSorteados.length == numeroMaximo){
        texto('p', 'Ya se sortearon todos los numeros');
        document.getElementById('reiniciar').setAttribute('disabled', 'true');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    } else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return GetNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function LimpiarCaja(){
    let ValorCaja = document.querySelector('#intentodelusuario');
    ValorCaja.value = '';
}

function CondicionesIniciales(){
    texto('h1', 'Juego del numero secreto');
    texto('p', `Escribe un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = GetNumeroSecreto();
    intentos = 1;
}

CondicionesIniciales();


