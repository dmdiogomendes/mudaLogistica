import React, { useEffect, useState } from 'react'
import styles from './transportes_dias.scss';
import { useRouter } from 'next/router';
import axios from 'axios';

const transportes_dias = () => {

    const router = useRouter();
    const { location } = router.query;
    const storedUsername = location
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
                    acc[formattedDate].push(item.nome);
                    return acc;
                }, {});
                setGroupedData(grouped);
                console.log(response)
            }).catch(error => {
                console.error('There was an error!', error);
            })
        }
    }, [location]);

    return (
        <div className='marcacoes_layout'>
            <div>
                <h1>Entregas - {location}</h1>
            </div>
            <div>
                {groupedData ? 
                        <div className='main_menu_transportes'>
                            {Object.entries(groupedData).map(([date, names]) => (
                                <div className='main_menu_transportes_single' key={date}>
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
    )
}

export default transportes_dias
