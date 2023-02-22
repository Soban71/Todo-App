import { Button, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import  {db} from "./firebase_config";
import './App.css'
export default function TodoList({todo , inProgress ,id} )

{
  function TodoDelete(){
db.collection("todo's").doc(id).delete();
  }

  //update
  function TodoUpdate(){
    db.collection("todo's").doc(id).update({
      inProgress : !inProgress
    });
      }

  return (
   <div style={{display: 'flex' }}>
   <ListItem>
 <ListItemText  primary={todo} secondary={inProgress ? "Inprocess"  : "Complete"} />
 </ListItem>

 <Button className='Button' onClick={TodoUpdate} style={{color:"#7B8FA1"}}>{inProgress ? "Done" : "unDone"}</Button>
 <Button className='Button' onClick={TodoDelete} style={{color:"#7B8FA1"}}>X</Button>
   </div>
  )
}
