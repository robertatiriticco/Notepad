import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setTimeout(() => {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        })
      })
    }, 300);   
  }

  return (
    <div>
      <Header />
      <div className="notes-collection">

      <CreateArea 
        onAdd={addNote}
      />
        {notes.map((noteItem, index) => {
          return (
            <Note
              title = {noteItem.title}
              content = {noteItem.content}
              key = {index}
              id = {index}
              onDelete={deleteNote}
            />
          );

        })}
      </div>
    </div>
  );
}

export default App;
