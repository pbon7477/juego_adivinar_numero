let gameOver = false;

let numeroAzar = Math.floor(Math.random()*25) + 1;
console.log(numeroAzar);

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje"); 
let intentos = document.getElementById("intentos");
let intento = 0;
intentos.innerText = intento;

let probados = document.getElementById("probados");
probados.innerHTML = "";

let btnComprobar = document.getElementById("btnComprobar");

let btnReset = document.createElement("button");
        btnReset.textContent = "reiniciar ";
        btnReset.classList.add("btnReset");
        btnReset.addEventListener("click",()=>{
            window.location.reload();
        }); 


function chequearResultado(){

    if(gameOver) return;

    intento++;
    intentos.textContent = intento;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(!isNaN(numeroIngresado)){
        probados.innerHTML += `[ ${numeroIngresado} ]`;
    }
    

   if(intento == 5 && numeroIngresado !== numeroAzar ){
        mensaje.textContent= 'Lo siento, no has encontrado el numero'
        numeroEntrada.disabled = true;
        btnComprobar.disabled = true;
        btnComprobar.classList.remove();
        btnComprobar.classList.add("btnComprobarOut");       
        
        
        document.getElementById("reset").insertAdjacentHTML("afterbegin",`<h1><span class="titulo">El numero incognito es:</span> ${numeroAzar}</h1>`);    
        document.getElementById("reset").insertAdjacentElement("afterend",btnReset);    
    }

    else if(numeroIngresado < 1 || numeroIngresado > 25 || isNaN(numeroIngresado) || numeroIngresado == null){
        mensaje.textContent = 'Por favor, ingrese un numero entre 1 y 25'
        mensaje.classList.remove();
        mensaje.style.color = '#d5e304';
        return      
    }
    else if(numeroIngresado == numeroAzar){
        mensaje.textContent = 'Felicidades!! Has adivinado el numero'
        mensaje.classList.remove();
        mensaje.style.color = '#5bf912'
        numeroEntrada.disabled = true;

        btnComprobar.classList.remove();
        btnComprobar.classList.add("btnComprobarOut"); 

        document.getElementById("reset").insertAdjacentHTML("afterbegin",`<h1><span class="titulo">El numero incognito es:</span> ${numeroAzar}</h1>`);    
        document.getElementById("reset").insertAdjacentElement("afterend",btnReset);    
        gameOver =true; 
    }
    else if (numeroIngresado < numeroAzar){
        mensaje.textContent = 'MUY BAJO, El numero es MAYOR al que ingresaste...continua.'
        mensaje.classList.remove();
        mensaje.style.color = '#127ef9'   
    }
    else if (numeroIngresado > numeroAzar){
        mensaje.textContent = 'MUY ALTO, El numero es MENOR al que ingresaste...continua.'
        mensaje.classList.remove();
        mensaje.style.color = '#f91240'
    }

numeroEntrada.value = "";
}

