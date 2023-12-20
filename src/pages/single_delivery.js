import React, { useEffect, useState } from 'react'
import styles from './single_delivery.scss';
import { useRouter } from 'next/router';
import axios from 'axios';

const single_delivery = () => {

    const [deliveryData, setDeliveryData] = useState(null);
    const router = useRouter();
    const { storedUsername, id } = router.query;


    useEffect(() => {
        if(storedUsername && id) {
            axios.get('http://localhost:8080/api/single_transporte', {
            params:{
                storedUsername,
                id
            }
        }).then(response => {
            setDeliveryData(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        })
        }
    },[storedUsername, id])

    const formattedDate = (x) => {
        const dateObj = new Date(x);
        return dateObj.toISOString().split('T')[0]
    }

    const cleanJson = (y) => {
        const articles = JSON.parse(y);
        return articles
    }

    return(
        <div>
            <div className='single_delivery'>
                {deliveryData && deliveryData.map((value, index) => (
                    <div key={index}> {/* Always use a key when mapping over an array */}
                        <h1>{formattedDate(value.data)} - {storedUsername}</h1>
                        <p>{value.nome}</p>
                        <p>{value.morada} </p>
                        <p>{value.zip_code}</p>
                        <p>{value.numero}</p>
                        {/* <p>{value.entrega ? '' : 'Entrega'} {value.montagem ? '' : '+ Montagem'}</p> */}
                        <p>Artigos: 
                            {cleanJson(value.artigos).map((artigo, artIndex) => (
                                <div key={artIndex}>
                                    <p>{artigo.unid}x Ref: {artigo.ref} - {artigo.nome_do_artigo} Montar: {artigo.montar === 'on' ? 'Sim' : 'Não'}</p>
                                </div>
                            ))}
                        </p>
                        <p>Observações: 
                           <b> {value.observation}</b> 
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default single_delivery