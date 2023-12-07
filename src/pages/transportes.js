import Link from 'next/link'
import styles from './transportes.scss'
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
          <h1>transportes</h1>
        </div>
        <div>
          <p>p103 - Gaia</p>
          <p>p112 - Braga</p>
          <p>p113 - Braga Nova Arcada</p>
          <p>p114 - Matosinhos</p>
          <p>p115 - Guimarães</p>
        </div>
      </div>
    </div>
  )
}

export default transportes