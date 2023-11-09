import React, { useState } from 'react'
import styles from './loja.css'

const loja = () => {


    const [nome, setNome] = useState()
    const [morada, setMorada] = useState()
    const [zip,setZip] = useState()
    const [numero, setNumero] = useState()
    const [artigo, setArtigo] = useState()

    const [numberOfContaineres, setNumberOfContaineres] = useState([])

    const addArtigo = (e) => {
        setNumberOfContaineres([...numberOfContaineres, 
            <div className='input-styles'>
                <div className='button_styles_montar'>
                    <input type="radio" size="50"/>
                </div>
                <input placeholder='artigos para serviço' name="query" size="50"/>
            </div>
        ]);
    };

  return (
    <div className='entregas_body'>
        <div> 
            <div>
                <h1>Marcaçoes de entregas</h1>
            </div>
            <div>
                <form>
                    <div>
                        <label className='input-styles' >
                            Nome:
                        </label>
                        <input type="text" name="query" size="50" />
                    </div>
                    <div>
                        <label className='input-styles' >
                            Morada:
                        </label>
                        <input type="text" name="query" size="50"/>
                    </div>
                    <div>
                        <label className='input-styles' >
                            Codigo de Postal:
                        </label>
                        <input type="text" name="query" size="50"/>
                    </div>
                    <div>
                        <label className='input-styles' >
                            Numero:
                        </label>
                        <input type="text" name="query" size="50"/>
                    </div>
                    <h2>Serviço:</h2>
                    <div className='input-serviço'>
                        <div className='input-styles'>
                            <label className='input-styles-servico'>
                                Entrega:
                            </label>
                            <input type="checkbox" name="entrega" size="50"/>
                        </div>
                        <div className='input-styles'>
                            <label className='input-styles-servico'>
                                Montagem:
                            </label>
                            <input type="checkbox" name="montagem"/>
                        </div>
                    </div>
                    <div>
                        <h2>Artigos:</h2>
                        <div>
                            <div className='input-styles'>
                                    <input placeholder='unid'step="1" type="number" min="0" max="100" size="2"/>
                                    <input placeholder='ref' name="query" type="number" size="12"/>
                                    <input placeholder='artigos para serviço'  type="text" name="query" size="50"/>
                                    <p className='montar_styles'> montar:</p>
                                <div className='button_styles_montar'>
                                    <input type="checkbox" size="50"/>
                                </div>
                                <p className='montar_styles'>preço:</p>
                                <input step="1" type="number" min="0" max="100"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Observações:</h2>
                        <textarea name="postContent" rows={6} cols={60} />
                    </div>
                </form>
                <button onClick={() => addArtigo()}>mais artigo</button>
            </div>
        </div>
    </div>
  )
}

export default loja