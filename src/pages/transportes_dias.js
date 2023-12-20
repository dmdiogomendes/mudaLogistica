import React, { useEffect, useState } from 'react'
import styles from './transportes_dias.scss';
import { useRouter } from 'next/router';
import axios from 'axios';

const transportes_dias = () => {

    const router = useRouter();
    const { storedUsername } = router.query;
    const [groupedData, setGroupedData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(storedUsername){
            axios.get('http://localhost:8080/api/transportes', {
                params:{
                    storedUsername
                }
            }).then(response => {
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
                    acc[formattedDate].push({ nome: item.nome, entrega_id: item.entrega_id });
                    return acc;
                }, {});
                setGroupedData(grouped);
            }).catch(error => {
                console.error('There was an error!', error);
            })
        }
    }, [storedUsername]);
  

    const single_delivery = (x,y) => {
        router.push(`/single_delivery?storedUsername=${x}&id=${y}`);
    }  

    return (
        <div className='marcacoes_layout'>
            <div>
                <h1>Entregas - {storedUsername}</h1>
            </div>
            <div>
                {groupedData ? 
                        <div className='main_menu_transportes'>
                            {Object.entries(groupedData).map(([date, items]) => (
                                <div className='main_menu_transportes_single' key={date}>
                                    <strong>{date}</strong>
                                    {items.map((item, index) => (
                                        <div key={index}>
                                            <button className='button_style' onClick={() => single_delivery(storedUsername,item.entrega_id)}>
                                                <p>{item.nome}</p>
                                            </button>
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
    )
}

export default transportes_dias
