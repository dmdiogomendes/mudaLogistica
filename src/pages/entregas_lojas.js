import React from 'react'
import styles from './entregas_lojas.scss';

const single_delivery = () => {
    return(
        <div>
            <div className='lojas_delivery'>
                <h1>entrega loja p115</h1>
                <div>
                    <div style={{
                            marginBottom: '10px',
                            border: '0.5px solid #ddd', // Subtle border color
                            borderRadius: '5px'}}>
                        <p>Data</p>
                        <p>Nome</p>
                        <p>Rua Zip-Code</p>
                        <p>Number</p>
                        <p>Tipo de serviço: Entregas, Montagem ou ambos</p>
                        <p>Artigos</p>
                        <p>Observações</p>
                    </div>
                    <div style={{
                                marginBottom: '10px',
                                border: '1px solid #ddd', // Subtle border color
                                borderRadius: '5px'}}>
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
        </div>
    )
}

export default single_delivery