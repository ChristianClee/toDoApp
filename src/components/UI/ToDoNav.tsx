import React from 'react';
import { useActions } from "../../redux/resuxHooks"
import { filterVar } from "../../redux/variables"
import { filterT } from "../../redux/types"
import { toDoSelect } from "../../redux/toDoSlice"
import { useSelector } from "react-redux" 


const ToDoNav: React.FC = () => {
  // панель навигации
  return (
    <nav className="todo__row">
      <Items />
      <Sort/>
      <Clean/>
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

const Sort:React.FC = () => {
  return (
    <div className="todo__sort">
      <Button filterVar={filterVar[0] } />
      <Button filterVar={filterVar[1] } />
      <Button filterVar={filterVar[2] } />
    </div>
  );
}

const Clean: React.FC = () => {
  const { cleanTasks } = useActions()

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
  const { filter } = useSelector(toDoSelect)
  const classBtn = filter.value === filterVar.value? "active" : "" 


  return (
    <button
      className={classBtn}
      onClick={() => setFilter(filterVar)}
    >
      {filterVar.name}
    </button>
  )
}

