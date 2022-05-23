import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [value, setValue]=useStae([])
  let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const increment=()=>{
    
  }

  const decrement=()=>{
    
    
  }
  
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={increment} ></button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={decrement}></button>
    </div>
  );
};

export default Counter;
