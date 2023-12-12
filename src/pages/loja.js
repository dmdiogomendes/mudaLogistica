import React, { useEffect, useState } from 'react'
import styles from './loja.scss'
import Link from 'next/link'
import { getUsernameFromLocalStorage } from './utilis/localStorage'

const loja = () => {

    const [username, setUsername] = useState('');
    const [nome, setNome] = useState()
    const [morada, setMorada] = useState()
    const [zip_code,setZip_code] = useState()
    const [numero, setNumero] = useState()
    const [data, setData] = useState()
    const [numero_of_articles, setNumero_of_articles] = useState(1)
    const [entrega, setEntrega] = useState(false)
    const [montagem, setMontagem] = useState(false);
    const [artigos, setArtigos] = useState([])
    const [observation, setObservation] = useState('');

    const submit_values = async(e) => {
        // e.preventDefault();
        try{
            const repsonse = fetch('/api/delivery', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome, 
                    morada, 
                    zip_code, 
                    numero, 
                    data, 
                    numero_of_articles, 
                    entrega, 
                    montagem, 
                    artigos, 
                    observation
                }),
            })
            .then(response => response.json())

        }catch(error){
            console.error('Error during login: ', error);
        }
    }

    useEffect(() => {

        const storedUsername = getUsernameFromLocalStorage();
            if(storedUsername){
                setUsername(storedUsername)
            }
    },[]);

    const handleCheckboxChange_1 = () => {
        setEntrega(!entrega); // Toggle the checkbox state
      };

    const handleCheckboxChange_2 = () => {
        setMontagem(!montagem); // Toggle the checkbox state
    };

    const handleNumberOfArticles = (event) => {
        const inputvalue = event.target.value;
        setNumero_of_articles(inputvalue)
    }

    const handleArticles = (index, field, value) => {
        const newFormData = [...artigos];
        newFormData[index] = {... newFormData[index], [field]: value};
        setArtigos(newFormData)
    }

  return (
    <div style={{display: 'flex', padding: '10px'}}>
        <div>
            <div> 
                <div className='login_div'>
                    <form onSubmit={submit_values} className='login'>
                        <h1>Marcaçoes de entregas {username}</h1>
                        <div>
                            <label className='input-styles' >
                                Calendario:
                            </label>
                            <input type="date" onChange={(e) => setData(e.target.value)} name="numero_input" size="50"/>
                        </div>
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
                            <input type="text" onChange={(e) => setZip_code(e.target.value)} name="zip_code_input" size="50"/>
                        </div>
                        <div>
                            <label className='input-styles' >
                                Numero:
                            </label>
                            <input type="text" onChange={(e) => setNumero(e.target.value)} name="numero_input" size="50"/>
                        </div>
                        <h2>Serviço:</h2>
                        <div className='input-servico'>
                            <div>
                                <>
                                    <label className='input-styles-servico'>
                                        Numero de Artigos:
                                    </label>
                                    <input step="1" onChange={handleNumberOfArticles} type="number" value={numero_of_articles} min="0" max="100"/>
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
                                [...Array(Number(numero_of_articles))].map((_ ,index) => (
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
                                                    <input placeholder='nome do artigo'  type="text" name="query" size="30"
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
                        <button onClick={() => console.log(artigos)}>
                            HERE HERE HERE
                        </button>
                        <div>
                            <h2>Observações:</h2>
                            <textarea onChange={(e) => setObservation(e.target.value)} name="postContent" rows={6} cols={60} />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='login'>
            <div>
                <h1>Marcações</h1>
                <div style={{display: 'flex'}}>
                    <div style={{paddingRight: '15px'}}>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <Link href="/single_delivery" style={{color: 'black'}}>
                            another place
                        </Link>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div>
                    {/* <div style={{paddingRight: '15px'}}>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                    </div>
                    <div style={{paddingRight: '15px'}}>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>23/10/2023</p>
                        <p>Diogo Antunes</p>
                        <p>Alexandre Mendes</p>
                        <p>Alberto Costa</p>
                        <p>Constantino Veiga</p>
                        <p>Perfeito Reis</p>
                        <p>Final Set</p>
                        <p>Paula Mendes</p>
                        <p>Lobo Mendes</p>
                        <p>Alberto Caeiro</p>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default loja