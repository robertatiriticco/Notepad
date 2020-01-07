import React, { useState } from "react";
import { Fab, createMuiTheme, ThemeProvider, Zoom } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { amber } from "@material-ui/core/colors";


function CreateArea(props) {

  const yellowTheme = createMuiTheme({ palette: { primary: amber } })

  const [isExpanded, setExpanded] = useState(false);
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  function expande(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded === true && 
        (<input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />)
        }
        <textarea
          onChange={handleChange}
          onClick={expande}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded === true ? 3 : 1}
          value={note.content}
        />
        <ThemeProvider theme={yellowTheme}>
          <Zoom in={isExpanded}>

            <Fab size="small" color="primary" type="submit" onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default CreateArea;
