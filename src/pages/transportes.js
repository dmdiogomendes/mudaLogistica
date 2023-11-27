import Link from 'next/link'
import styles from './transportes.css'
import React from 'react'

const transportes = () => {
  return (
    <div className='transportes_body'>
      <div>
        <div>
              <p><Link href="/loja">Loja</Link></p>
              <p><Link href="/transportes">Entregas</Link></p>
        </div>
        <div>
          <h2>transportes</h2>
        </div>
        <div>
          <p>Name</p>
          <p>Street - Zip Code - numero</p>
          <p>artigos</p>
          <p>Observações</p>
        </div>
        <p>----------------------------</p>
        <div>
          <p>Name</p>
          <p>Street - Zip Code - numero</p>
          <p>artigos</p>
          <p>Observações</p>
        </div>
      </div>
    </div>
  )
}

export default transportes