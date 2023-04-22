        // Forma de elección de la jugada
              function eleccion(jugada) {
                const opciones = ["Piedra 🪨", "Papel 🧻", "Tijera ✂️"];
                return opciones[jugada -1] || "Opción inválida👎";
            }

        // Forma de elección del combate
            function combate(jugador, PC) {
                let desenlace = "" 
                if(jugador == PC) {
                    desenlace = "EMPATE😐"
                } else if(jugador == 1 && PC == 2) {
                    desenlace = "PERDISTE☹️"
                    perdidas++
                } else if(jugador == 2 && PC == 3){
                    desenlace = "PERDISTE☹️"
                    perdidas++
                } else if(jugador == 3 && PC == 1) {
                    desenlace = "PERDISTE☹️"
                    perdidas++
                } else if(jugador == 2 && PC == 1) {
                    desenlace = "GANASTE CRACK🥳"
                    triunfos++
                } else if(jugador == 3 && PC == 2){
                    desenlace = "GANASTE CRACK🥳"
                    triunfos++
                } else if(jugador == 1 && PC == 3) {
                    desenlace = "GANASTE CRACK🥳"
                    triunfos++
                } else {
                    desenlace = "Lo siento no puedes jugar👎"
                }
                return desenlace
            }
           

        //1 es piedra, 2 es papel y 3 es tijera.
            let jugador = 0
            let min = 1
            let max = 3
            let PC = 0
            let triunfos = 0
            let perdidas = 0

            while (triunfos < 3 && perdidas < 3) {
                PC = Math.floor(Math.random()*(max-min)+min)
                jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera")
                
                //alert("Elegiste " + jugador)
                alert("PC elige: " + eleccion(PC))
                alert("Tu eliges: " + eleccion(jugador))  

                //combate
                alert(combate(jugador , PC))

                
             
            }

            alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces ")
           
 