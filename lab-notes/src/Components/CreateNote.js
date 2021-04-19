import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';
import {useHistory} from 'react-router-dom'

function Create(props) {

  const initialStateValues = {
    title: '',
    note: '',
  };
  const [values, setValues] = useState(initialStateValues);
  const [profile, setProfile]=useState(null)
  const history =  useHistory()



/* cerrar sesión y ver si está activo un perfil*/
  useEffect ( () => {
    auth.onAuthStateChanged ( (user) => {
      if (user) {
          setProfile(user.email)
      }
    })
  }, [])
  const handleLogOut = () =>{
      auth.signOut()
      setProfile(null)
      history.push('/')
  }



  const stateNotesChange = e => {
    const {name, value} = e.target;
    setValues ({...values, [name]: value,  });
 };

  const saveNote = e => {
    e.preventDefault();
    props.addNote(values)
    setValues({...initialStateValues})
  };

  const getNotesById = async (id) =>{
    const doc = await db.collection('notes').doc(id).get();
    setValues({...doc.data()})
  }

  useEffect(() => {
    if (props.currentId === '') {
      setValues({...initialStateValues});
    } else {
      getNotesById(props.currentId);

    }
  }, [props.currentId])

return(
    <form className="noteBody" onSubmit={saveNote}>
      <div className="createNote">
        <div className="logOutBox">
        {
           profile ?
            (

            <button onClick= {handleLogOut}
            className="logOut">
            cerrar sesión </button>

            )
            :
            ( <span></span>)
         }
        </div>
        <header>
          <p className="headerTitle" > Happynotes </p>
          <img className="lightbulb" src='/assets/idea.svg' alt="happyNotes"></img>

         </header>
        <input
          className="titleNoteArea"
          placeholder="Título de tu nota"
          name="title"
          onChange={stateNotesChange}
          value = {values.title}
        />
        <textarea
          className="noteArea"
          placeholder="Escribe aquí tu nota"
          name="note"
          onChange={stateNotesChange}
          value = {values.note}
        ></textarea>
        <button className="buttonSave">{props.currentId === '' ? 'Guardar' : 'Actualizar'}</button>

     </div>
    </form>
)
};

export default Create;




//

// const handleUserProfile = () =>{
//   const [profile, setProfile]= useState(null)
// useEffect ( () => {
//   auth.onAuthStateChanged ( (user) => {
//     if (user) {
//         setProfile(user.email)
//     }
//   })
// }, [])
