import React, { useEffect, useState } from 'react'
import styles from './loja.scss'
import Link from 'next/link'
import { getUsernameFromLocalStorage } from './utilis/localStorage'
import axios from 'axios'

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

    const [data_entregas, setData_entregas] = useState([]);
    const [nome_entregas, setNome_entregas] = useState([]);
    const [groupedData, setGroupedData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const submit_values = async(e) => {
        e.preventDefault();
            try{
                const response = await fetch('http://localhost:8080/api/delivery', {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    //artigo
                    body: JSON.stringify({
                        username,
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
                const responseData = await response.json();
                if (response.ok) {
                    setNome('');
                    setMorada('');
                    setZip_code('');
                    setNumero('');
                    setData('');
                    setNumero_of_articles(1); // Assuming '1' is your initial state
                    setEntrega(false);
                    setMontagem(false);
                    setArtigos([]); // Assuming an empty array is your initial state
                    setObservation('');
                } else {
                    // Handle errors based on the response
                    console.error('Error in response: ', responseData);
                }
            }catch(error){
                console.error('Error during login: ', error);
            }
    }

    useEffect(() => {

        const storedUsername = getUsernameFromLocalStorage();
            if(storedUsername){
                setUsername(storedUsername)
                setNome_entregas(nome_entregas)
            }

        axios.get('http://localhost:8080/api/transportes',{
            params:{
                storedUsername,
            }
        }).then(response => {
                console.log(response)
                console.log(storedUsername)
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const sortedData = response.data.sort((a, b) => new Date(a.data) - new Date(b.data));

                const futureData = sortedData.filter(item => new Date(item.data) >= today);

                const grouped = futureData.reduce((acc, item) => {
                const date = new Date(item.data);
                const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        
                if (!acc[formattedDate]) {
                    acc[formattedDate] = [];
                }
                acc[formattedDate].push(item.nome);
                return acc;
                }, {});
                setGroupedData(grouped);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
                //setIsLoading(false);
            });
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

    const formatDate = dateString => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

  return (
    <div className='parent-container'>
            <div> 
                <div className='marcacoes_layout'>
                    <form onSubmit={submit_values}>
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
                        <div>
                            <h2>Observações:</h2>
                            <textarea onChange={(e) => setObservation(e.target.value)} name="postContent" rows={6} cols={60} />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
        </div>
            <div className='parent-container'>
                <div className='marcacoes_layout'>
                    <h1>Marcações</h1>
                    <div style={{display: 'flex'}}>
                        {groupedData ? 
                        <div className='data-grid'>
                        {Object.entries(groupedData).map(([date, names]) => (
                            <div key={date}>
                                <strong>{date}</strong>
                                {names.map((name, index) => (
                                    <div key={index}>
                                            <p>{name}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                        </div>
                        :
                        <></>    
                    }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default loja