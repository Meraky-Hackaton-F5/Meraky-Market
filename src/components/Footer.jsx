import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <h5 className= "footerText">© Meraky 2023</h5>
        <h5 className= "footerText">Aviso legal</h5>
        {/* <Link to='/legalstuff' className="footerText">Aviso Legal</Link> */}
        <h5 className= "footerText">Política de cookies</h5>
        <div className='footerSocialNetworks p-3' >
            <img className='socialNetworks' src="/src/img/icon-facebook.png" alt="Icono de Facebook" />
            <img className='socialNetworks' src="/src/img/icon-linkedin.png" alt="Icono de LinkedIn" />
            <img className='socialNetworks' src="/src/img/icon-twitter.png" alt="Icono de Twitter" />
        </div>
      </div>
    </footer>
  )
}
export default Footer