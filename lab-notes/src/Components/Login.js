import React, {useState} from 'react';
import { auth } from '../firebaseConfig';
import {useHistory} from 'react-router-dom'


function Login ({handlesetAutenticate}){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msgerror, setMsgError] = useState(null)
  const history =  useHistory()
  //const [autenticate, setAutenticate]=useState(false)

  // const loginUser = () =>{
  //   auth.signInWithEmailAndPassword(email, pass)
  //   .then( (r) => console.log(r))
  //   .catch((err) =>
  //     console.log(err))
  //     if (e.code === 'auth/invalid-email' ){
  //       setMsgError('Formato de email incorrecto')
  //   }
  //   if (e.code === 'auth/weak-password'){
  //     setMsgError('La contraseña debe tener al menos 6 caracteres')

  // };
  // }

  const handleUserRegister = (e) =>{
    e.preventDefault()
     auth.createUserWithEmailAndPassword(email, pass)
      //setAutenticate(true)
      .then(r => {
        history.push('/yournotes')
      } )
      .catch(e)
      if (e.code === 'auth/invalid-email' ){
          setMsgError('Formato de email incorrecto')
      }
      if (e.code === 'auth/weak-password'){
        setMsgError('La contraseña debe tener al menos 6 caracteres')
      };
  }

  const handleUserLogin =() => {
      auth.signInWithEmailAndPassword(email, pass)
      .then((r) => {
        history.push('/yournotes')
      })
      .catch( (err) => {
        if (err.code === 'auth/wrong-password' ){
          setMsgError('Contraseña incorrecta')
      }
      })
  };



  return(
    <div className="loginText">
      <div className="loginBox">
        <p className="loginTitle" > Happynotes </p>
        <img className="loginLightbulb" src='/assets/idea.svg' alt="happyNotes"></img>
        </div>
       <div className="loginInvitation">
        <p> Inicia sesión para ver todas tus ideas guardadas en un mismo lugar </p>
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

        <button onClick={handleUserLogin}
        className="buttonWelcomeLogin">
        ¡Inicia sesión!</button>

      </div>
      </form>
      {
          msgerror !== null ?
          ( <div> {msgerror} </div>) : ( <span> </span>)
        }

      <div className="loginInputsAccounts">
        <p> o </p>
        <button
        className="buttonLoginGoogle"
        /*onClick={()=>{handlesetAutenticate()}}*/>Inicia sesión con
        <img className="googleLogo" src='/assets/search.svg' alt="google"></img> </button>
        <button className="buttonLoginFacebook"> Inicia sesión con <img className="facebookLogo" src='/assets/facebook.svg' alt="facebook"></img> </button>

      </div>
    </div>

  )
};
export default Login;
