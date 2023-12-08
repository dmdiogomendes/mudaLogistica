import React from 'react'
import styles from './single_delivery.scss';

const single_delivery = () => {
    return(
        <div>
            <div className='single_delivery'>
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