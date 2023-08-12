import React from 'react'

import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='rodape'>
        <div className="selo_qualidade">
            <img src="/img/selo-garantia.png" alt="selo de garantia" />
        </div>
        <div className="text_rodape">
            Todos os Direitos Reservados &copy; 2023
        </div>
    </div>
  )
}

export default Footer