import React from 'react';
import { useActions } from "../../redux/resuxHooks"
import { toDoSelect } from "../../redux/toDoSlice"
import { useSelector } from "react-redux" 
import { ReactComponent as Arrow } from "../assets/svg/arrow.svg"
import { onchange, onkeydown } from "../utilits"



const ToDoInput: React.FC = () => {
  
  return (
    <div className="todo__row">
      <Input />
      <Arrow className='todo__arrow' />
      <div className='todo__background'></div>
    </div>
  );
}
export default ToDoInput;


const Input: React.FC = () => {
  const { getInputValue, addTasks } = useActions() 
  const { inputValue, tasks } = useSelector(toDoSelect)


  return (
    <input
      placeholder="what needs to be do"
      required
      type="text"
      value={inputValue}
      onChange={(e) => onchange(e, getInputValue)}
      onKeyDown={(e) => onkeydown(e, addTasks, getInputValue, tasks)}
    />
  );
}
