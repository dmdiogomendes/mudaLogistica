import React, { useState } from 'react'
import styles from './loja.css'
import Link from 'next/link'

const loja = () => {


    const [nome, setNome] = useState()
    const [morada, setMorada] = useState()
    const [zip,setZip] = useState()
    const [numero, setNumero] = useState()
    const [artigo, setArtigo] = useState()
    const [entrega, setEntrega] = useState(false)
    const [preco_entrega, setPreco_entrega] = useState();
    const [montagem, setMontagem] = useState(false);
    const [preco_montagem, setPreco_montagem] = useState();


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

    const display_values = () => {
        alert(nome);
        alert(morada);
        alert(zip);
        alert(numero);
        alert(entrega)
    }

    const submit_values = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleCheckboxChange_1 = () => {
        setEntrega(!entrega); // Toggle the checkbox state
      };

    const handleCheckboxChange_2 = () => {
        setMontagem(!montagem); // Toggle the checkbox state
    };

  return (
    <div className='entregas_body'>
        <div>
            <p><Link href="/loja">Loja</Link></p>
            <p><Link href="/transportes">Entregas</Link></p>
        </div>
        <div> 
            <div>
                <h1>Marcaçoes de entregas</h1>
            </div>
            <div>
                <form onSubmit={submit_values}>
                    <div>
                        <label className='input-styles' >
                            Nome:
                        </label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome_input" size="50" />
                    </div>
                    <div>
                        <label className='input-styles' >
                            Morada:
                        </label>
                        <input type="text" onChange={(e) => setMorada(e.target.value)} name="morada_input" size="50"/>
                    </div>
                    <div>
                        <label className='input-styles' >
                            Codigo de Postal:
                        </label>
                        <input type="text" onChange={(e) => setZip(e.target.value)} name="zip_code_input" size="50"/>
                    </div>
                    <div>
                        <label className='input-styles' >
                            Numero:
                        </label>
                        <input type="text" onChange={(e) => setNumero(e.target.value)} name="numero_input" size="50"/>
                    </div>
                    <h2>Serviço:</h2>
                    <div className='input-serviço'>
                        <div className='input-styles'>
                            <label className='input-styles-servico'>
                                Entrega:
                            </label>
                            <input type="checkbox" onChange={handleCheckboxChange_1} name="entrega" size="50"/>
                            <>
                                <p className='montar_styles'> - preço:</p>
                                <input step="1" onChange={(e) => setPreco_entrega(e.target.value)} type="number" min="0" max="100"/>
                            </>
                        </div>
                        <div className='input-styles'>
                            <label className='input-styles-servico'>
                                Montagem:
                            </label>
                            <input type="checkbox" onChange={handleCheckboxChange_2} name="montagem"/>
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
                                <>
                                    <p className='montar_styles'>preço:</p>
                                    <input  step="1" type="number" min="0" max="100"/>
                                </>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Observações:</h2>
                        <textarea name="postContent" rows={6} cols={60} />
                    </div>
                    <button onClick={() => alert(nome)}>Submit</button>
                </form>
                <button onClick={() => display_values()}>mais artigo</button>
            </div>
        </div>
    </div>
  )
}

export default loja