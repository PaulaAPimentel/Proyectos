function iniciarJuego(){  
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputcharmender = document.getElementById("CHARMENDER")
    let inputsquirtle = document.getElementById("SQUIRTLE")
    let inputonix = document.getElementById("ONIX")
    let inputvolcanion = document.getElementById("VOLCANION")
    let inputquagsire = document.getElementById("QUAGSIRE")
    let inputcamerupt = document.getElementById("CAMERUPT")
   
   
    if(inputcharmender.checked){
        alert("HAZ ESCOGIDO A CHARMENDER🔥")
    }
    else if(inputsquirtle.checked){
        alert("HAZ ESCOGIDO A SQUIRTLE💦")
    }
    else if(inputonix.checked){
        alert("HAZ ESCOGIDO A ONIX⛰️")
    }
    else if(inputvolcanion.checked){
        alert("HAZ ESCOGIDO A VOLCANION🔥💦")
    }
    else if(inputquagsire.checked){
        alert("HAZ ESCOGIDO A QUAGSIRE💦⛰️")
    }
    else if(inputcamerupt.checked){
        alert("HAZ ESCOGIDO A CAMERUPT🔥⛰️")
    }
    else{
        alert("👎NO HAZ ALEGIDO ALGUNA DE LAS OPCIONES- TRY AGAIN👎")
    }

}


window.addEventListener("load", iniciarJuego)