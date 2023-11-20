import React from 'react';
import styles from './login.css';

const login = () => {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'blue',
            minHeight: '100vh',
        }}>
            <div>
                <h1>Muda Transportes</h1>
                <form>
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
                        <input type="text"/>
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
                        <input type="password"/>
                    </div>
                    <button>
                        login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default login