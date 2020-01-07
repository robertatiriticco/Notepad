import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={handleClick} aria-label="delete" >
        <DeleteIcon fontSize="small"/>
      </IconButton>
    </div>
  );
}

export default Note;
