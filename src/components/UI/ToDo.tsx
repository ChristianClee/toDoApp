import React, { useEffect } from 'react';
import ToDoRow from './ToDoRow';
import ToDoInput from './ToDoInput';
import ToDoNav from './ToDoNav';
import { filterVar } from "../../redux/variables"
import { useActions } from "../../redux/resuxHooks"
import { toDoSelect } from "../../redux/toDoSlice"
import { useSelector } from "react-redux" 
import { filterFunc } from "../utilits"
import { useSaveSortedCount } from '../customHooks';
// import { filterVar } from "../../redux/variables"

const ToDo: React.FC = () => {
  // строка ToDoInput, всегда видна
  // строки навигации, видна если есть хотябы одна задача */ }
  // строки задач, видны если есть хотябы одна задача */ }

  const { tasks } = useSelector(toDoSelect)
  return (
    <div className="todo">
      <ToDoInput /> 
      {
        tasks.length > 0 ?
          <>
            <ToDoNav /> 
            <ToDoRows />
          </>
          : null
      }
      
    </div>
  );
}
export default ToDo;




const ToDoRows: React.FC = () => {
  // создаются <ToDoRow></ToDoRow> исходя из колличества элементов в массиве tasks 

  const { tasks, filter } = useSelector(toDoSelect)
  const sortValue = filter.value

  const tasksSorted = filterFunc(tasks, sortValue)
  useSaveSortedCount( tasksSorted.length )

  
  return (
    <>
      {
        tasksSorted.map((task, index: number) => {
          return (
            <ToDoRow task={task} key={task.text + index} />)
        })
      }
    </>
  );
}

