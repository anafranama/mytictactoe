import react from 'react'

const Ventana = () => {
  return (
    <div>
      <h1>tic tac toe</h1>
      <h1>pick a Weapon</h1>
      <div className="contenedorgeneral">
          <h3>CHOOSE YOUR WEAPON</h3>
          <div className="inputs mx-auto">
            <input type="text" placeholder="Player 1 username" />
            <input type="text" placeholder="Player 2 username" />
          </div>
          <div className="divSimbolos mx-auto">
              <div className="simbolosgato" >X</div>
                <div className="simbolosgato" >O</div>

        


          </div>
        </div>
      </div>
    );
}

export default Ventana