import Link from 'next/link'
import styles from './transportes.scss'
import { useRouter } from 'next/router';
import React from 'react'

const transportes = () => {

  const router = useRouter();

  const getData = (local) => {
    alert('Localização ' + local);
    router.push(`/transportes_dias?location=${local}`);
  }

  return (
    <div className='transportes_body'>
      <div>
        <div>
          <h1>transportes</h1>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button onClick={() => getData('p103')} className='button_style'>
            p103 - Gaia
          </button>
          <button onClick={() => getData('p105')} className='button_style'>
            p105 - Famalicão
          </button>
          <button onClick={() => getData('p112')} className='button_style'>
            p112 - Braga
          </button>
          <button onClick={() => getData('p113')} className='button_style'>
            p113 - Nova Arcada
          </button>
          <button onClick={() => getData('p114')} className='button_style'>
            p114 - Matosinhos
          </button>
          <button onClick={() => getData('p115')} className='button_style'>
            p115 - Guimarães
          </button>
          <button onClick={() => getData('p116')} className='button_style'>
            p116 - Barcelos
          </button>
          <button onClick={() => getData('p125')} className='button_style'>
            p125 - Maia
          </button>
        </div>
      </div>
    </div>
  )
}

export default transportes