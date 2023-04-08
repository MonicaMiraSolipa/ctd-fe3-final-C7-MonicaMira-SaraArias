import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {themeState, setDispatch} = useContextGlobal()
  const [themeColor, setThemeColor] = useState(true)
  const [vista, setVista] = useState('SWITCH_LIGHT')



  const handleClick = ()=>{
    setThemeColor(!themeColor)
    setDispatch({type: vista})
  }

  useEffect(()=>{
    if(themeColor){
      setVista('SWITCH_DARK')
    }else{
      setVista('SWITCH_LIGHT')
    }
    //themeDispatch({type:vista})
  },[themeColor])



  return (
    <nav>
      
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <Link to={routes.Home}><h3>Inicio </h3></Link>
        <Link to={routes.Contact}><h3>Contacto </h3></Link>
        <Link to={routes.Favs}><h3>Favoritos </h3></Link>
        <button onClick={handleClick}>{themeState.icon} </button>
      
    </nav>
  )
}

export default Navbar