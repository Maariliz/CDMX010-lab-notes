import React, {useState} from 'react';
import {auth} from './firebaseConfig';

function Signup (){
  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');

  const userRegister = (e) => {
    e.preventDefault()
    try{
      auth.createUserWithEmailAndPassword(email, pass)
      window.confirm('¡Usuario registrado!')
    } catch(e){
      console.log(e)
    }
  }

  return(
    <div className="signupText">
      <form onSubmit={userRegister} className="">
      <div className="signupBox">
        <p className="signupTitle" > Happynotes </p>
        <img className="signupLightbulb" src='/assets/idea.svg' alt="happyNotes"></img>
        </div>
       <div className="signupInvitation">
        <p> Regístrate para ver todas tus ideas guardadas en un mismo lugar </p>
      </div>
      <div className="signupInputs">
        <input
        onChange = {(e)=>{setEmail(e.target.value)}}
          type="text"
          className="writeEmail"
          placeholder="Escribe tu correo"></input>
        <input
        onChange = {(e)=>{setPass(e.target.value)}}
          type="password"
          className="writePassword"
          placeholder="Escribe tu contraseña"></input>
        <input type="submit" className="buttonWelcomeSignup">¡Regístrate!</input>
      </div>
      <div className="signupInputsAccounts">
        <p>O regístrate con alguna de tus cuentas</p>
        <button className="buttonSignupGoogle">Registrate con <img className="googleLogo" src='/assets/search.svg' alt="google"></img> </button>
        <button className="buttonSignupFacebook">Registrate con <img className="facebookLogo" src='/assets/facebook.svg' alt="facebook"></img> </button>
      </div>
      </form>
    </div>
  )
};
export default Signup;
