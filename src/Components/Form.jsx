import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [mensaje, setMensaje] = useState("")
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let validacion = emailRegex.test(user.email)
    if(validacion && user.name.length > 5){
      setMensaje(`Gracias ${user.name}, te contactaremos cuanto antes vía mail`)
      //localStorage.setItem(user.name,user.email)
      user.name= ""
      user.email=""
    } else{
      setMensaje('Por favor verifique su información nuevamente')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="name" placeholder='Name' value={user.name}
          onChange={(e) => setUser({...user, name: e.target.value})}
        />
        <input type="email" placeholder='Email' value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
        />
        <button type="submit">Send</button>
        <h4>{mensaje}</h4>
      </form>
    </div>
  );
};

export default Form;
