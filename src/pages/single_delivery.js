import React, { useEffect } from 'react'
import styles from './single_delivery.scss';
import { useRouter } from 'next/router';
import axios from 'axios';

const single_delivery = () => {

    const router = useRouter();
    const { storedUsername, id } = router.query;


    useEffect(() => {
        axios.get('http://localhost:8080/api/single_transporte', {
            params:{
                storedUsername,
                id
            }
        }).then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error('There was an error!', error);
        })
    },[])

    return(
        <div>
            <div className='single_delivery'>
                <h1>{storedUsername}</h1>
                <h1>{id}</h1>
                <h1>Single Delivery</h1>
                <div>
                    <p>Data</p>
                    <p>Nome</p>
                    <p>Rua Zip-Code</p>
                    <p>Number</p>
                    <p>Tipo de serviço: Entregas, Montagem ou ambos</p>
                    <p>Artigos</p>
                    <p>Observações</p>
                </div>
            </div>
        </div>
    )
}

export default single_delivery