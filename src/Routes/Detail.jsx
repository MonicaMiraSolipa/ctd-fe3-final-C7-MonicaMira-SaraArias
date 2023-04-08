import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
 const [dentistSelect, setDentistSelect] = useState({})
 const params = useParams()

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id
  useEffect(() =>{
    fetch(url)
    .then(response => response.json())
    .then(data => setDentistSelect(data))
  }, [])
  

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detail Dentist  </h1>
      <div className='card'>
        <h3>{dentistSelect.name}</h3>
        <img src="../images/doctor.jpg" alt='Doctor' width={90} />
        <h3>Email: {dentistSelect.email}</h3>
        <h3>Telefono: {dentistSelect.phone}</h3>
        <h3>Website: {dentistSelect.website}</h3>
      </div>
    </>
  )
}

export default Detail