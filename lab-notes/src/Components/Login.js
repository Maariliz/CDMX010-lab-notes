import React from 'react';

function Login (){

  return(
    <div className="loginText">
      <div className="loginBox">
        <p className="loginTitle" > Happynotes </p>
        <img className="loginLightbulb" src='/assets/idea.svg' alt="happyNotes"></img>
        </div>
       <div className="loginInvitation">
        <p> Inicia sesión para ver todas tus ideas guardadas en un mismo lugar </p>
      </div>
      <div className="loginInputs">
        <input type="text" className="writeEmailLogin" placeholder="Escribe tu correo"></input>
        <input type="password" className="writePasswordLogin" placeholder="Escribe tu contraseña"></input>
        <button className="buttonWelcomeLogin">¡Regístrate!</button>
      </div>
      <div className="loginInputsAccounts">
        <p> o </p>
        <button className="buttonLoginGoogle">Inicia sesión con <img className="googleLogo" src='/assets/search.svg' alt="google"></img> </button>
        <button className="buttonLoginFacebook"> Inicia sesión con <img className="facebookLogo" src='/assets/facebook.svg' alt="facebook"></img> </button>

      </div>
    </div>
  )
};
export default Login;
