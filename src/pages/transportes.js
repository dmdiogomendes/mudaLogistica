import Link from 'next/link'
import React from 'react'

const transportes = () => {
  return (
    <div>
      <div>
            <p><Link href="/loja">Loja</Link></p>
            <p><Link href="/transportes">Entregas</Link></p>
      </div>
      <div>transportes</div>
    </div>
  )
}

export default transportes