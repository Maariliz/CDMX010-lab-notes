import React from 'react';
import {Link} from 'react-router-dom'

function Welcome (){

  return(
    <div className="welcomeText">
        <div className="welcomeBox">
         <p className="welcomeTitle" > Happynotes </p>
         <img className="welcomeLightbulb" src='/assets/idea.svg' alt="happyNotes"></img>
        </div>
        <div className="aboutHp">
         <p> Todas tus ideas guardadas en un mismo lugar </p>
        </div>
        <div className="buttonsWelcome">
          <Link to= "/login">
            <button className="buttonWelcomeLogin">Iniciar sesión</button>
          </Link>
          <Link to="/signup">
            <button className="buttonWelcomeSignup">Registrarse</button>
          </Link>
        </div>
    </div>
  )
};
export default Welcome;
