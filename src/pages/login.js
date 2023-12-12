import React, { useEffect, useState } from 'react';
import styles from './login.scss';
import { useRouter } from 'next/router';
import { Passero_One } from 'next/font/google';
import { setUsernameInLocalStorage } from './utilis/localStorage';

const login = () => {

    const router = useRouter();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState('');

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
            if (response.ok) {
                const data = await response.json();
                
                // Assuming the response structure includes an 'entity' property
                if (data.entity === "loja") {
                    router.push('/loja');
                    setUsernameInLocalStorage(user)
                } else {
                    router.push('/transportes');
                }
            } else {
                console.error('Login failed:', response.statusText);
            }
        }catch (error){
            console.error('Error during login: ', error);
        }
    }


    // const register_login = async(e) => {
    //     e.preventDefault();

    //     try{
    //         const response = await fetch('http://localhost:8080/api/register', {
    //             method: 'POST',
    //             headers:{
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ user, password }),
    //         });

    //         if(response.ok){
    //             alert("Registado")
    //         }else{
    //             alert("Tenta de novo")
    //         }

    //     }catch (error){
    //         console.error('Error during login: ', error);
    //     }
    // }

    return(
            <div className="input_containers">
                <form onSubmit={handlelogin} className='login'>
                    <div style={{ 
                    marginBottom: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '10px',
                    }}>
                        <h1>muda transportes</h1>
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
                    {/* <button onClick={register_login} style={{background:'red'}}>
                        registo
                    </button> */}
                    <button type="submit">Login</button>
                </form>
            </div>
    )
}

export default login