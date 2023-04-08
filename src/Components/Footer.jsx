import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' width={100} />
      </div>
      <div className="Iconn">
        <ul>
          <li><img src="./images/ico-facebook.png" alt="facebook" width={80} /></li>
          <li><img src="./images/ico-instagram.png" alt="instagram" width={80} /></li>
          <li><img src="./images/ico-tiktok.png" alt="tiktok" width={100} /></li>
          <li><img src="./images/ico-whatsapp.png" alt="whatsapp" width={100} /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
