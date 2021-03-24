import React, { useState } from 'react'


var Array = [
    { id: 1, valor: "" },
    { id: 2, valor: "" },
    { id: 3, valor: "" },
    { id: 4, valor: "" },
    { id: 5, valor: "" },
    { id: 6, valor: "" },
    { id: 7, valor: "" },
    { id: 8, valor: "" },
    { id: 9, valor: "" },
];
var estado = true;
var simbolo = "x";

const ganador=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,3,6],
    [0,4,8],
    [2,4,6]
]

const Interfaz1 = () => {
    var [datos, setdatos] = useState(Array);
    var [mensaje,setMensaje]=useState("It is X turn")
    var [clase,setClase]=useState("")
    

    

    var asignar = (id) => {
        
        
        
     
        if (datos[id - 1].valor=="") {
            datos[id - 1].valor = simbolo;
            setdatos((datos = [...datos]));
        }
        if (simbolo == "x") {
          simbolo = "o";
        } else {
          simbolo = "x";
        }
        var nuevomensaje = "It is " + simbolo.toUpperCase() + " turn";
        setMensaje(nuevomensaje);

        funcganador(datos)
    }


    var funcganador = (valores) => {
        ganador.map((juego) => {
          
            if (
                valores[juego[0]].valor == valores[juego[1]].valor &&
                valores[juego[1]].valor == valores[juego[2]].valor
            ) {     if (
              valores[juego[0]].valor == "x" ||
              valores[juego[0]].valor == "o"
            ) {
              setMensaje(valores[juego[0]].valor.toUpperCase() + " Wins");

              console.log("ganador");
                 setClase("verde");
            }       }        
        
            }
    )
}



    return (
        <div  >
            <h1>Tic Tac Toe</h1>
            <div className="message">
                <h4 className={clase}>{mensaje}</h4>
            </div>

            <div className="divisiones">
                {datos.map((espacio) => {
                    const { id, valor } = espacio
                    return (
                        <div key={id} className={"div" + id.toString()} onClick={() => asignar(id)}>
                            <p> {valor}</p>
                        </div>
                    )
                }
                )
                }


            </div>

            
        </div>
    );
}

export default Interfaz1