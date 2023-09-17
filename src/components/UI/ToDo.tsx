import React  from 'react';
import ToDoRow from './ToDoRow';
import ToDoInput from './ToDoInput';
import ToDoNav from './ToDoNav';
import { toDoSelect } from "../../redux/toDoSlice"
import { useSelector } from "react-redux" 
import { filterFunc } from "../utilits/utilits"
import { useSaveSortedCount } from '../utilits/customHooks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ToDo: React.FC = () => {

  return (
    <div className="todo">
      <ToDoInput />    {/*строка ToDoInput, всегда видна, предназначенна для ввода новых задач */}
      <ToDoNav />      {/* строки ToDoNav, всегда видна, предназначенна для управления задач  */}
      <ToDoRows />     {/* строки задач, видны если есть хотябы одна задача */}
    </div>
  );
}
export default ToDo;




const ToDoRows: React.FC = () => {
  // из массива tasks создаётся <ToDoRow></ToDoRow> 
  const { tasks, filter } = useSelector(toDoSelect)
  const sortValue = filter.value

  const tasksSorted = filterFunc(tasks, sortValue)
  // но вначале tasks фильтруется по свойству checkMark которое может быть "active" или "", и результат фильтрации записывается в tasksSorted

  useSaveSortedCount( tasksSorted.length )  // определяет колличество отсортированных элементов и сохраняет их в Redux

  /* TransitionGroup спец обертка для анимации списка элементов,
   автоматически определяет  элемент который нужно
   размонтировать из DOM после анимации */

  /* CSSTransition анимирует обернутые в него элементы

  /* ToDoRow это новые элементы задач,
   добавленные после ввода в Input */ 
  return (
   
    <TransitionGroup component={null}>      
        {
          tasksSorted.map(task => (
            <CSSTransition                  
                key={task.id}
                timeout={500}
                classNames="todoRow"
            >                               
                <ToDoRow task={task}  />    
            </CSSTransition>
          )
          )
        }
      </TransitionGroup>
  );
}

