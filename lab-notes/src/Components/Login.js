import React, {useState} from 'react';
import { auth } from '../firebaseConfig';
import {useHistory} from 'react-router-dom';
// import {socialMediaAuth} from './auth';
//import {socialMediaAuth} from './authMetods'


function Login ({handlesetAutenticate}){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msgerror, setMsgError] = useState(null)
  const history =  useHistory()

  //const [autenticate, setAutenticate]=useState(false)

 //REGISTRAR USUARIO CON EMAIL Y PASSWORD
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

  //INICIAR SESIÓN EMAIL Y PASSWORD
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

// INICIAR SESIÓN GOOGLE

// const socialMediaAuth = (provider) => {
//   auth.signInWithPopup(provider)
//   .then((res) => {
//     return res.user;
//   })
//   .catch((er) => {
//     return er;
//   })
// };

//   const handleOnClick = async (provider) => {
//     const res = await socialMediaAuth(provider);
//     console.log(res);
//   }


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
        >Inicia sesión con
        <img className="googleLogo" src='/assets/search.svg' alt="google"></img> </button>
        {/* <button className="buttonLoginFacebook"> Inicia sesión con <img className="facebookLogo" src='/assets/facebook.svg' alt="facebook"></img> </button> */}

      </div>
    </div>

  )
};
export default Login;
