import React from 'react';
import { Route, Routes, Link, Form, Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Fotter from './Compents/Fotter';
import Traductor from './pages/Traductor';


const App = () => {
  return (
    
    <div className="container">
<div className="menu">
      <div className="menu1">
      <div><Link to="/">Inicio</Link></div>
        <div><Link to="/traductor">Traductor</Link></div>
        <div><Link to="/signup">SignUp</Link></div>
      </div>
      <div className="menu2">
        <div><Link to="/beneficios-del-idioma">Beneficios del Idioma</Link></div>
        <div><Link to="/casos-de-exito">Casos de Exito</Link></div>
        <div><Link to="/formacion-de-idiomas">Formacion de Idiomas</Link></div>
        <div><Link to="/recursos-linguisticos">Recursos Linguisticos</Link></div>
        
      </div>

     
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/traductor" element={<Traductor />} />

      </Routes>
  

    </div>
     
  
     
    <footer>{<Fotter/>}</footer>


    </div>
    
  );
}

export default App;

