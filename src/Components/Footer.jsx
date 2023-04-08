import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {themeState, setDispatch} = useContextGlobal()
  return (
    <footer style={{background:themeState.background, colorf: themeState.colorf}}>
        <p>Powered by</p>
      <div>
        <img src="./images/DH.png" alt='DH-logo' width={200} />
        <img src="./images/ico-facebook.png" alt="facebook" width={40} />
        <img src="./images/ico-instagram.png" alt="instagram" width={40} />
        <img src="./images/ico-tiktok.png" alt="tiktok" width={40} />
        <img src="./images/ico-whatsapp.png" alt="whatsapp" width={40} />
      </div>
    </footer>
  )
}

export default Footer
