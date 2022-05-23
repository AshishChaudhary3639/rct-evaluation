import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import App from "../../App";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [value,setValue]=useState("asasasdas")
  const [todo,setTodo]=useState([])
const handlerChange=(e)=>{
  setValue(e.target.value)
}
 
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} onChange={handlerChange} placeholder="Add somthing"/>
      <button data-cy="add-task-button"  onClick={()=>{
        setTodo([
          ...todo,{id: Date.now(),value:value}
        ])
        setValue("")
      }}>Add</button>
      <div>
        {
          todo.map((Todos)=>{
            <div>
              <App key={Todos.id} Todos={Todos} addItem={AddTask} />
            </div>
          })
        }
      </div>
     </div>
  );
};

export default AddTask;
