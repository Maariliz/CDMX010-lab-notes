import React, { useState, useEffect } from 'react';


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

  useEffect(() => {
    if (props.originalId === '') {
      setValues({...initialStateValues});
    } else {
      console.log('editando nota')
    }
  }, [])

return(
    <form className="noteBody" onSubmit={saveNote}>
      <div className="createNote">
        <header>
          <p className="headerTitle" > Happynotes </p>
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
        <button className="buttonSave">Guardar</button>
     </div>
    </form>
)
};

export default Create;

