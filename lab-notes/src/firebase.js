import React, { useEffect, useState } from "react";
import Create from "./Components/CreateNote";
import { db } from './firebaseConfig';



const Crud =  () => {

  const [writingNotes, setWritingNotes] = useState([]);
  const [currentId, setCurrentId] = useState('');

//crear una nota en la colección
  const addNote = async (linkObject) => {
    try{
      if (currentId === ''){
        await db.collection('notes').doc().set(linkObject)
        console.log('new note added')
      } else {
        await db.collection('notes').doc(currentId).update(linkObject);
        setCurrentId('');
      }

    } catch (error) {
      console.log(error);
    }

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



  return <div>
      <Create {...{addNote, currentId, writingNotes}} />
      <div className="savedNote">
        {writingNotes.map(link => (
          <div className="cardNote" key={link.id}>
            <div className="noteArea">
              <h3>{link.title}</h3>
              <p>{link.note}</p>
                <div className="menuButtons">
                  <img className="buttonEdit" src='/assets/boligrafo.svg' alt="editar" onClick={() => setCurrentId(link.id)}></img>
                  <img className="buttonDelete" src='/assets/eliminar.svg' alt="eliminar" onClick={() => deleteNote(link.id)}></img>
                </div>
            </div>
          </div>
        ))}
       </div>
  </div>;
}

export default Crud;
