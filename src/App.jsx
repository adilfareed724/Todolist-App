import { useState } from "react";

import "./App.css";

function App() {
  

 
  
  const [todelist, setTodolist] = useState([]);
  const todosave = (event) => {
    const toname = event.target.toname.value;
    if(!todelist.includes(toname)) {
      const finaltodo=[...todelist,toname]
      setTodolist(finaltodo)
    } 
    else {
      alert("todo already exit")
     
    }
    event.preventDefault();
  };
  const list =todelist.map((value,index)=>{
    return(
      <Todolistitem value={value} key={index} indexNumber={index}
      todelist={todelist}
      setTodolist={setTodolist}
      />
      
    )
  })
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={todosave}>
          <input className="inputtext" type="text" name="toname" placeholder="Add a Todo..." />
          <button  className="btn">Add</button  >
          <h2>Todo List</h2>
     
        </form>
        <div className="list">
       
         <ul >
          
            {list}
          

         </ul>
        
        </div>
       
      </div>
    </>
  );
}

export default App;
function Todolistitem({value,indexNumber,setTodolist,todelist}){
  const [status, setStatus] = useState(false);
  const deleterow=()=>{
    
    let finaldata=todelist.filter((v,i)=>i!=indexNumber)
    setTodolist(finaldata)

    
  }
  const checkstatus=()=>{
    setStatus(!status)
  }

   return(
    
     <li   className={(status)? 'complete': ""} onClick={checkstatus}> {indexNumber+1}: {value} <span onClick={deleterow} >&times;</span></li>

   ) 
}
