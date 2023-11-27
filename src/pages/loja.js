import React, { useState } from 'react'
import styles from './loja.css'
import Link from 'next/link'

const loja = () => {


    const [nome, setNome] = useState()
    const [morada, setMorada] = useState()
    const [zip,setZip] = useState()
    const [numero, setNumero] = useState()
    const [artigo, setArtigo] = useState([])
    const [number_of_articles, setNumber_of_articles] = useState(1)
    const [entrega, setEntrega] = useState(false)
    const [montagem, setMontagem] = useState(false);
    const [obser, setObser] = useState();

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

    const handleNumberOfArticles = (event) => {
        const inputvalue = event.target.value;
        setNumber_of_articles(inputvalue)
    }

    const handleArticles = (index, field, value) => {
        const newFormData = [...artigo];
        newFormData[index] = {... newFormData[index], [field]: value};
        setArtigo(newFormData)
    }

  return (
    <div style={{display: 'flex', padding: '10px'}}>
        <div>
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
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome_input" size="50"/>
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
                            <div>
                                <>
                                    <label className='input-styles-servico'>
                                        Numero de Artigos:
                                    </label>
                                    <input step="1" onChange={handleNumberOfArticles} type="number" value={number_of_articles} min="0" max="100"/>
                                </>
                            </div>
                            <div className='input-styles'>
                                <label className='input-styles-servico'>
                                    Entrega:
                                </label>
                                <input type="checkbox" onChange={handleCheckboxChange_1} name="entrega" size="50"/>
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
                            {
                                [...Array(Number(number_of_articles))].map((_ ,index) => (
                                    <div key={index}>
                                            <div className='input-styles'>
                                                <>
                                                    <input placeholder='unid'step="1" type="number" min="0" max="100" size="2"
                                                    onChange={(e) => handleArticles(index, 'unid', e.target.value)}
                                                    />
                                                </>
                                                <>
                                                    <input placeholder='ref' name="query" type="number" size="12"
                                                    onChange={(e) => handleArticles(index, 'ref', e.target.value)}
                                                    />
                                                </>
                                                <>
                                                    <input placeholder='nome do artigo'  type="text" name="query" size="50"
                                                    onChange={(e) => handleArticles(index, 'nome_do_artigo', e.target.value)}
                                                    />
                                                </>
                                                <p className='montar_styles'> montar:</p>
                                                    <div className='button_styles_montar'>
                                                        <input type="checkbox" size="50"
                                                        onChange={(e) => handleArticles(index, 'montar', e.target.value)}
                                                        />
                                                    </div>
                                            </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h2>Observações:</h2>
                            <textarea onChange={(e) => setObser(e.target.value)} name="postContent" rows={6} cols={60} />
                        </div>
                        <button onClick={() => alert(nome)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div>
                <h1>Marcações</h1>
                {/* link que irá para as informações */}
                <p><Link href="/single_delivery">NOME - Delivery</Link></p>
                <p>{obser}</p>
            </div>
                {
                    artigo.map((artigos, index) => (
                        <div key={index}>
                            <p>{artigos.unid}</p>
                            <p>{artigos.ref}</p>
                            <p>{artigos.nome_do_artigo}</p>
                            <p>{artigos.montar}</p>
                        </div>
                    ))
                }
        </div>
    </div>
  )
}

export default loja