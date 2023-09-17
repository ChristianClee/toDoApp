import React from 'react';
import { useActions } from "../../redux/reduxHooks"
import { toDoSelect } from "../../redux/toDoSlice"
import { useSelector } from "react-redux"
import { ReactComponent as Arrow } from "../assets/svg/arrow.svg"
import { onchange, onkeydown } from "../utilits/utilits"



const ToDoInput: React.FC = () => {
  /* ToDoInput предназначен для ввода новых задач */

  return (
    <div className="todo__row">
      <Input />                                    {/*Input вынесен в отдельную функцию для удобства, через него вводятся новые задачи */}
      <Arrow className='todo__arrow' />            {/* это svg элемент, стрелка */}
      <div className='todo__background'></div>
    </div>
  );
}
export default ToDoInput;


const Input: React.FC = () => {
  // через Input вводятся новые задачи
  // 
  const { getInputValue, addTasks } = useActions()
  // getInputValue - сохраняет вводимое значение в Redux при каждом нажатии клавиши
  // addTasks - добавляет значение которое было введено в input, при нажатии на Enter, далее из значения создается задача
  const { inputValue, tasks } = useSelector(toDoSelect)


  return (
    <input
      placeholder="what needs to be do"
      required                                                                // необходимо для анимации
      type="text"
      value={inputValue}
      onChange={(e) => onchange(e, getInputValue)}
      onKeyDown={(e) => onkeydown(e, addTasks, getInputValue, tasks)}
    />
  );
}
