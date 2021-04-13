import React, { useEffect, useState } from "react";
import Create from "./Components/CreateNote";
import { db } from './firebaseConfig';

const Crud =  () => {

  const [writingNotes, setWritingNotes] = useState([]);
  const [originalId, setOriginalId] = useState('');

//crear una nota en la colección
  const addNote = async (linkObject) => {
    await db.collection('notes').doc().set(linkObject)
    console.log('new note added')
  }

// traer la data desde Firebase para escribirla en happynotes
  const getNote = async () => {
 db.collection('notes').onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach( (doc) => {
    docs.push({...doc.data(), id: doc.id});
  });
    setWritingNotes(docs);
 });
};

  useEffect(() => {
    getNote();

  }, []);

// borrar la nota
  const deleteNote = async (id) => {
    if (window.confirm('¿De verdad quieres borrar esta nota?')) {
      await db.collection('notes').doc(id).delete();
      console.log('nota eliminada')
    }
  };

// editar la nota


  return <div>
      <Create {...{addNote, originalId, writingNotes}} />
      <div className="savedNote">
        {writingNotes.map(link => (
          <div className="cardNote" key={link.id}>
            <div className="noteArea">
              <h2>{link.title}</h2>
              <p>{link.note}</p>
                <button className="buttonEdit" onClick={() => setOriginalId(link.id)}> Editar </button>
                <button className="buttonDelete" onClick={() => deleteNote(link.id)}> Eliminar </button>
            </div>
          </div>
        ))}
       </div>
  </div>;
}

export default Crud;
