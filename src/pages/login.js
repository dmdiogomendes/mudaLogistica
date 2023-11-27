import React, { useEffect, useState } from 'react';
import styles from './login.css';
import { useRouter } from 'next/router';
import { Passero_One } from 'next/font/google';

const login = () => {

    const router = useRouter();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [users, setUsers] = useState([]);

    const handlelogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user, password }),
            })
            .then(response => response.json())
            .then(data => {

                const dados = data[0]

                setUsers(data);
                console.log(data)
                console.log(data.user)
                console.log(data.entity)

                if(data.entity == "loja"){
                    router.push('/loja')
                }else{
                    router.push('/transportes')
                }
            })
        }catch (error){
            console.error('Error during login: ', error);
        }
    }

    const register_login = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user, password }),
            });

            if(response.ok){
                alert("Registado")
            }else{
                alert("Tenta de novo")
            }

        }catch (error){
            console.error('Error during login: ', error);
        }
    }

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: '#8498EB',
            minHeight: '100vh',
        }}>
            <div>
                <h1>Muda Transportes</h1>
                <form onSubmit={handlelogin}>
                    <div style={{ 
                    marginBottom: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '10px',
                    }}>
                        <div style={{
                            textAlign: 'left', // Align labels to the right
                            marginRight: '10px',
                        }}>
                            <label>
                                user:
                            </label>
                        </div>
                        <input onChange={(e) => setUser(e.target.value)} type="text"/>
                    </div>
                    <div style={{ 
                        marginBottom: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div style={{
                            textAlign: 'left', // Align labels to the right
                            marginRight: '10px',
                        }}>
                            <label>
                                password:
                            </label>
                        </div>
                        <input onChange={(e) => setPassword(e.target.value)} type="password"/>
                    </div>
                    <button onClick={register_login} style={{background:'red'}}>
                        registo
                    </button>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default login