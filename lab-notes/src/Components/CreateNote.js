import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';


function Create(props) {

  const initialStateValues = {
    title: '',
    note: '',
  };

  const [values, setValues] = useState(initialStateValues);

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

