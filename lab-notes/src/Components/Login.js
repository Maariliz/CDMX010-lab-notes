import React, {useState} from 'react';
import { auth } from '../firebaseConfig';
import {useHistory} from 'react-router-dom';



function Login ({handlesetAutenticate}){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msgerror, setMsgError] = useState(null)
  const history =  useHistory()



 //REGISTRAR USUARIO CON EMAIL Y PASSWORD
  // const handleUserRegister = (e) =>{
  //   e.preventDefault()
  //    auth.createUserWithEmailAndPassword(email, pass)
  //     //setAutenticate(true)
  //     .then(r => {
  //       history.push('/yournotes')
  //     } )
  //     .catch(e)
  //     if (e.code === 'auth/invalid-email' ){
  //         setMsgError('Formato de email incorrecto')
  //     }
  //     if (e.code === 'auth/weak-password'){
  //       setMsgError('La contraseña debe tener al menos 6 caracteres')
  //     };
  // }

  //INICIAR SESIÓN EMAIL Y PASSWORD
  const handleUserLogin =(e) => {
    e.preventDefault()
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
          <form onSubmit={handleUserLogin} className="formLogin">
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


        {/*inicio de sesión*/}

        <button onClick={handleUserLogin}
        className="buttonWelcomeLogin">
        ¡Inicia sesión!</button>

      </div>
      </form>
      {
          msgerror !== null ?
          ( <div className="errors"> {msgerror} </div>) : ( <span> </span>)
        }


    </div>

  )
};
export default Login;
