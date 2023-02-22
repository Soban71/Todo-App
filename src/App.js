import './App.css';
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import  {db} from "./firebase_config";
import firebase from "firebase";
import { useEffect } from 'react';
import TodoListInfo from './TodoListInfo';
import TodoList from './TodoListInfo';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';


function App()

//Adding to firebase
{
  function addTodo(e){
e.preventDefault();
db.collection("todo's").add({
  Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  inProgress : true ,
  todo : TodoAppText,

});
setTodoAppText("");
}
  
const [TodoAppText,setTodoAppText] =useState('');
const [todos,setTodos] =useState([]);
useEffect(() => {

  db.collection("todo's").onSnapshot(snapshot =>{
setTodos(snapshot.docs.map(doc=>({
  id:doc.id ,
  inProgress: doc.data().inProgress,
  todo:doc.data().todo
})))
  })

  }, [])

function clearAll(e){
  e.preventDefault();
  setTodoAppText("");
}
 
  const addEmoji = (emoji) => () => setTodoAppText(`${TodoAppText}${emoji}`);
  return (
    <div className="App">
      <div className='AppHeader'>
        <h1> Soban Tado App🔥</h1>
       
        <form action="">
        <Textarea 
        style={{border: "0px solid #7B8FA1", backgroundColor: "white",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
      }}
        className="textarea"
      placeholder="Type in here…"
      value={TodoAppText}
      onChange={(e)=>setTodoAppText(e.target.value)}
      minRows={1}
      maxRows={1}
      startDecorator={
        <Box sx={{ display: 'flex', gap: .3 }}>
          <IconButton  color="black" onClick={addEmoji('👍')}>
            👍
          </IconButton>
          <IconButton  color="neutral" onClick={addEmoji('🏖')}>
            🏖
          </IconButton>
          <IconButton  color="neutral" onClick={addEmoji('😍')}>
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <Typography level="body3" sx={{ ml: 'auto' }}>
          {TodoAppText.length} (char)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
        
            <Button type='submit' className='button'  style={{
              marginTop : "20px", width: "22%" ,  backgroundColor: "#567189",color: "white" ,
           marginLeft:"120px",borderRadius:"5px"}} onClick={addTodo}>Add</Button>

<Button type='submit' className='button'  style={{marginTop : "22px",
marginLeft:"80px", width: "20%" , backgroundColor: "#567189",color: "white",borderRadius:"5px" }} onClick={clearAll}>Clear</Button>
            
        </form>


        <div className='ListCaller'>
        <h3>Todo List</h3>
       {todos.map((todo)=>(
<div className='List'>

<TodoList  

todo={todo.todo}
inProgress={todo.inProgress}
id={todo.id}
>
</TodoList>
</div>
))}
</div>

</div>
      </div>
      
   
    
  );
}

export default App;
