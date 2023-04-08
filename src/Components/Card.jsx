import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
//import { links } from "./utils/links";


const Card = ({ name, username, id }) => {
  const [favsSelect, setFavsSelect] = useState({})

  const url = "https://jsonplaceholder.typicode.com/users/" + id
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setFavsSelect(data))
  }, [])

  const addFav = () => {
     

    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    // Aqui iria la logica para agregar la Card en el localStorage
    let favs = JSON.parse(localStorage.getItem('favs'))
    if (favs) {
      const idFavs = favs.find(obj => obj.id == id)
      if (!idFavs) {
        favs = [...favs, favsSelect]
      }
    } else {
      favs = [favsSelect]
    }
    localStorage.setItem('favs', JSON.stringify(favs))
  }

  const {themeState, setDispatch} = useContextGlobal()
    console.log(themeState)

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link className="card" key={id} to={'/dentist/' + id}>
        <h3 style={{ color: themeState.color}}>{name}</h3>
        <img src="./images/doctor.jpg" alt='Doctor' width={90} />
        <h3 style={{ color: themeState.color}}>{username}</h3>
      </Link>

      <button onClick={addFav} className="favButton"> ⭐ </button>
    </div>
  );
};

export default Card;
