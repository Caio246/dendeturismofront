import '../Form/Form.css';
import api from '../../../api';
import React, { useRef } from 'react';

const Formpacotes = () => {
    const nomePacotes = useRef()
    const destinoPacotes = useRef()
    const duracaoPacotes = useRef()
    const precoPacotes = useRef()

    function enviarDados(event) {
        event.preventDefault()
        console.log(nomePacotes.current.value)
        api.post("/pacotesviagens/", {
            nome: nomePacotes.current.value,
            destino: destinoPacotes.current.value,
            duracao: duracaoPacotes.current.value,
            preco: precoPacotes.current.value,
            }).then((res) => console.log(res)).catch((err) => console.log(err))
    }
    return (
        <div>
            <div className='container-formulario'>
                <form onSubmit={enviarDados}>
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label >Pacote</label>
                            <input type="text" className="form-control" ref={nomePacotes}  placeholder="Digite aqui o nome do pacote" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Destino</label>
                            <input type="text" className="form-control" ref={destinoPacotes}  placeholder="Digite aqui o destino da viagem" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label >Duração</label>
                            <input type="text" className="form-control" ref={duracaoPacotes}  placeholder="Período da viagem" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Preço</label>
                            <input type="text" className="form-control" ref={precoPacotes}  placeholder="Valor do pacote" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar!</button>
                </form>
            </div>
        </div>

    );
}
export default Formpacotes;