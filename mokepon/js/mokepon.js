//Variables
let ataqueJugador
   




function iniciarJuego(){  
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)

    let botonFire = document.getElementById("boton-fire")
    botonFire.addEventListener('click',ataqueFuego)
    let botonWater = document.getElementById("boton-water")
    botonWater.addEventListener('click',ataqueAgua)
    let botonEarth = document.getElementById("boton-earth")
    botonEarth.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){

    //Variables escoger mascota
    let inputcharmender = document.getElementById("CHARMENDER")
    let inputsquirtle = document.getElementById("SQUIRTLE")
    let inputonix = document.getElementById("ONIX")
    let inputvolcanion = document.getElementById("VOLCANION")
    let inputquagsire = document.getElementById("QUAGSIRE")
    let inputcamerupt = document.getElementById("CAMERUPT")
    let spanmascotajugador = document.getElementById("mascota-jugador")  
    let spanvidajugador = document.getElementById("vidas-jugador")
    let spanvidaenemigo = document.getElementById("vidas-enemigo")
   
    //Elección Mascota Jugador
    if(inputcharmender.checked){
        spanmascotajugador.innerHTML = ("CHARMENDER🔥")
    }
    else if(inputsquirtle.checked){
        spanmascotajugador.innerHTML = ("SQUIRTLE💦")
    }
    else if(inputonix.checked){
        spanmascotajugador.innerHTML = ("ONIX⛰️")
    }
    else if(inputvolcanion.checked){
        spanmascotajugador.innerHTML = ("VOLCANION🔥💦")
    }
    else if(inputquagsire.checked){
        spanmascotajugador.innerHTML = ("QUAGSIRE💦⛰️")
    }
    else if(inputcamerupt.checked){
        spanmascotajugador.innerHTML = ("CAMERUPT🔥⛰️")
    }
    else{
        alert("👎NO HAZ ELEGIDO ALGUNA DE LAS OPCIONES- TRY AGAIN👎")
    }
  
        // Elección Mascota Enemigo
        let min = 1
        let max = 6
     
        function aleatorio(min, max) {
         return Math.floor(Math.random() * (max - min+ 1) +min)
    }
    
        function seleccionarMascotaEnemigo(){
        let eleccionMascota = ""
           const opciones = ["CHARMENDER🔥", "SQUIRTLE💦", "ONIX⛰️", "VOLCANION🔥💦", "QUAGSIRE💦⛰️", "CAMERUPT🔥⛰️"]
           const indice = aleatorio(min, max)
           eleccionMascota += opciones[indice - 1] + ""
    
       let spanmascotaenemigo = document.getElementById("mascota-enemigo");
           spanmascotaenemigo.textContent = eleccionMascota;
    }
    return seleccionarMascotaEnemigo();
}

function ataqueFuego (){
    ataqueJugador ='FIRE🔥'
    alert(ataqueJugador)
}

function ataqueAgua (){
    ataqueJugador ='WATER💦'
    alert(ataqueJugador)
}

function ataqueTierra (){
    ataqueJugador ='EARTH⛰️'
    alert(ataqueJugador)
}
    
window.addEventListener("load", iniciarJuego)