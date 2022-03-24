import React from 'react';
import '../Destinos/Destinos.css';
import { useEffect, useState } from "react"
import api from "../../../api"

function Destinos() {


  const [destino, setDestino] = useState({

    nomedestino: "",
    cidade: "",
    estado: "",
    descricao: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    api.post('/destino', destino)
  }

  useEffect(() => { console.log(destino) }, [destino])

  return (
    <section id="destinos" className="destinos">
      <h1 className="destinos-title">Destinos</h1>
      <div className="destinos-cards">
        <div className="card">
          <div className="card-content">
            <h3>Jericoacoara</h3>
            <p>Viva as belezas da Lagoa do Paraiso e da Pedra Furada.</p>

            <form name="form1" id="form1" method="post" action="/controllers/controllerForm.php">
              <input type="text" name="destino" id="destino" placeholder="Destino:" onChange={(event) => setDestino({ ...destino, nomedestino: event.target.value })} />
              <input type="text" name="cidade" id="cidade" placeholder="Cidade:" onChange={(event) => setDestino({ ...destino, cidade: event.target.value })} />
              <input type="text" name="estado" id="estado" placeholder="Estado:" onChange={(event) => setDestino({ ...destino, estado: event.target.value })} />
              <textarea name="descicao" id="descricao" placeholder="Descrição:"></textarea>
              <input onClick={handleSubmit} type="submit" value="Enviar" />
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Salvador</h3>
            <p>Conheça as belezas do Pelourinho e do Farol da Barra.</p>
          </div>
          <form name="form1" id="form1" method="post" action="/controllers/controllerForm.php"
          >
            <input type="text" name="destino" id="destino" placeholder="Destino:" onChange={(event) => setDestino({ ...destino, nomedestino: event.target.value })} />
            <input type="text" name="cidade" id="cidade" placeholder="Cidade:" onChange={(event) => setDestino({ ...destino, cidade: event.target.value })} />
            <input type="text" name="estado" id="estado" placeholder="Estado:" onChange={(event) => setDestino({ ...destino, estado: event.target.value })} />
            <textarea name="descicao" id="descricao" placeholder="Descrição:"></textarea>
            <input onClick={handleSubmit} type="submit" value="Enviar" />
          </form>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Rio de Janeiro</h3>
            <p>
              Conheça a vista maravilhosa do Cristo Redentor e do Pão de Açúcar.
            </p>
          </div>
          <form name="form1" id="form1" method="post" action="/controllers/controllerForm.php">
            <input type="text" name="destino" id="destino" placeholder="Destino:" onChange={(event) => setDestino({ ...destino, nomedestino: event.target.value })} />
            <input type="text" name="cidade" id="cidade" placeholder="Cidade:" onChange={(event) => setDestino({ ...destino, cidade: event.target.value })} />
            <input type="text" name="estado" id="estado" placeholder="Estado:" onChange={(event) => setDestino({ ...destino, estado: event.target.value })} />
            <textarea name="descicao" id="descricao" placeholder="Descrição:"></textarea>
            <input onClick={handleSubmit} type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Destinos;
