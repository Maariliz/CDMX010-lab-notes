import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig'

function Signup (){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgError] = useState(null)

    const userRegister = (e) =>{
      e.preventDefault()
       auth.createUserWithEmailAndPassword(email, pass)
        .then(r => alert('usuario registrado!') )
        .catch(e)
        if (e.code === 'auth/invalid-email' ){
            setMsgError('Formato de email incorrecto')
        }
        if (e.code === 'auth/weak-password'){
          setMsgError('La contraseña debe tener al menos 6 caracteres')

      };

    }

    const googleRegister = (e) =>{
      e.preventDefault()
       auth.signInWithPopup(provider)

       .then(r => alert('usuario registrado!') )
       .catch(e)
       if (e.code === 'auth/invalid-email' ){
           setMsgError('Formato de email incorrecto')
       }
       if (e.code === 'auth/weak-password'){
         setMsgError('La contraseña debe tener al menos 6 caracteres')

     };
    }


  return(
    <div className="signupText">

      <div className="signupBox">
        <p className="signupTitle" > Happynotes </p>
        <img className="signupLightbulb" src='/assets/idea.svg' alt="happyNotes"></img>
        </div>
       <div className="signupInvitation">
        <p> Regístrate para ver todas tus ideas guardadas en un mismo lugar </p>
      </div>
      <div className="signupInputs">

        <form onSubmit={userRegister} className="formRegister">
        <input
        onChange={(e) =>{setEmail(e.target.value)}}
          type="email"

          className="writeEmail"
          placeholder="Escribe tu correo"/>
        <input
          onChange={(e) =>{setPass(e.target.value)}}
          type="password"
          className="writePassword"
          placeholder="Escribe tu contraseña"/>

        <button
        type="submit"
        className="buttonWelcomeSignup"> ¡Regístrate!
        </button>

        </form>

        {
          msgerror !== null ?
          ( <div> {msgerror} </div>) : ( <span> </span>)
        }

     </div>
      <div className="signupInputsAccounts">
        <p>O regístrate con alguna de tus cuentas</p>

        <button type="submit"
          onSubmit={googleRegister}
        className="buttonSignupGoogle">Registrate con
        <img className="googleLogo" src='/assets/search.svg'
        alt="google"></img> </button>

        <button type="button"
        className="buttonSignupFacebook">Registrate con
        <img className="facebookLogo" src='/assets/facebook.svg'
        alt="facebook"></img> </button>

      </div>

    </div>
  )
};
export default Signup;
