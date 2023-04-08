
import { Routes, Route } from "react-router-dom";
import { routes } from './routes'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {

  //<div className={themeState.theme ? 'App' : 'App-dark'} style={{backgroundColor: themeState.bgColor, color: themeState.color}}>

//div className={themeState.theme ? 'App' : 'App-dark'}></div>
const {themeState, setDispatch} = useContextGlobal()


  return (
      <div className="App"  style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
      
          <Navbar/>
          <Routes>
            <Route path={routes.Home} element={<Home/>}/>
            <Route path={routes.Detail} element={<Detail/>}/>
            <Route path={routes.Contact} element={<Contact/>}/>
            <Route path={routes.Favs} element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
