import React from 'react';
import { useActions } from "../../redux/reduxHooks"
import { filterVar } from "../../redux/variables"
import { filterT } from "../../redux/types"
import { toDoSelect } from "../../redux/toDoSlice"
import { useSelector } from "react-redux"


const ToDoNav: React.FC = () => {
  // панель ToDoNav предназначенна для управления задачами
  return (
    <nav className="todo__row">
      <Items />                      {/* Items вынесен в отдельную функцию для удобства, показывает колличество отсортированных элементов */}
      <Sort />                       {/* Sort вынесен в отдельную функцию для удобства, состоит из трех кнопок для сортировки */}
      <Clean />                      {/* Clean вынесен в отдельную функцию для удобства, кнопка для очистки всех полей  */}
    </nav>
  );
}
export default ToDoNav;


const Items: React.FC = () => {
  const { countSortedTask } = useSelector(toDoSelect)


  return (
    <div className="todo__items">
      <p>{countSortedTask}</p>
      {
        (countSortedTask > 1) ?
          <p>items left</p>
          :
          <p>item left</p>
      }
    </div>
  );
}

const Sort: React.FC = () => {

  return (
    <div className="todo__sort">
      <Button filterVar={filterVar[0]} />            {/* Button вынесен в отдельную функцию для удобства, показывает кнопку для сортировки, передает пропс filterVar, для с*/}
      <Button filterVar={filterVar[1]} />
      <Button filterVar={filterVar[2]} />
    </div>
  );
}

const Clean: React.FC = () => {
  const { cleanTasks } = useActions()
  //cleanTasks удаляет все задачи из массива tasks
  return (
    <div className="todo__clean">
      <button
        onClick={() => { cleanTasks() }}
      >clear component</button>
    </div>
  );
}

const Button: React.FC<{ filterVar: filterT }> = ({ filterVar }) => {
  const { setFilter } = useActions()
  //  setFilter - устанавливает вид сортировки
  const { filter } = useSelector(toDoSelect)

  const classBtn = filter.value === filterVar.value ? "active" : ""
  // classBtn - определяет стилизацию кнопки исходя из значения filter.value и filterVar.value

  return (
    <button
      className={classBtn}
      onClick={() => setFilter(filterVar)}    // устанавливает вид сортировки при клике на кнопку
    >
      {filterVar.name}
    </button>
  )
}

