import React, {useState} from 'react';
import { auth } from '../firebaseConfig';
import {useHistory} from 'react-router-dom';
// import {socialMediaAuth} from './auth';
//import {socialMediaAuth} from './authMetods'


function Login ({handlesetAutenticate}){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msgError, setMsgError] = useState(null)
  const history =  useHistory()

  //const [autenticate, setAutenticate]=useState(false)

 //REGISTRAR USUARIO CON EMAIL Y PASSWORD
  const handleUserRegister = (e) =>{
    e.preventDefault()
     auth.createUserWithEmailAndPassword(email, pass)
      //setAutenticate(true)
      .then(r => {
        history.push('/yournotes')
        alert('¡Registro exitoso!')
      } )
      .catch(e)
      if (e.code === 'auth/invalid-email' ){
          setMsgError('Formato de email incorrecto')
      }
      if (e.code === 'auth/weak-password'){
        setMsgError('La contraseña debe tener al menos 6 caracteres')
      };
  }

  return(
    <div className="loginText">
      <div className="loginBox">
        <p className="loginTitle" > Happynotes </p>
        <img className="loginLightbulb" src='/assets/idea.svg' alt="happyNotes"></img>
        </div>
       <div className="loginInvitation">
        <p>Regístrate para comenzar a guardar todas tus ideas en un mismo lugar</p>
      </div>
          <form onSubmit={handleUserRegister} className="formLogin">
      <div className="loginInputs">
        <input
        onChange={(e) =>{setEmail(e.target.value)}}
        type="email"
        className="writeEmailLogin"
        placeholder="Escribe tu correo">
       </input>
        <input
        type="password"
        onChange={(e) =>{setPass(e.target.value)}}
        className="writePasswordLogin"
        placeholder="Escribe tu contraseña">
        </input>
        {/* botón de registro */}

        <button  className="buttonWelcomeSignup">¡Regístrate!</button>

        {/*inicio de sesión*/}

      </div>
      </form>
      {
          msgError !== null ?
          ( <div className="errors"> {msgError} </div>) : ( <span> </span>)
        }


    </div>

  )
};
export default Login;

