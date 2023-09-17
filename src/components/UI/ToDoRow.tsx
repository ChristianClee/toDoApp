import React from 'react';
import { taskT } from "../../redux/types"
import { useActions } from "../../redux/reduxHooks"


type ToDoRowT = {
  task: taskT
}

const ToDoRow: React.FC<ToDoRowT> = ({ task }) => {
  // ToDoRow это новые элементы задач, добавленные после ввода в Input

  const { tuggleTasks } = useActions()
  // tuggleTasks переключает состояние активных на завершённые 

  return (
    <div
      className="todo__row todo__row--anim"
      onClick={() => { tuggleTasks(task) }}
    >                                               {/* на все тело  ToDoRow установленн слушатель клика*/}
      <span className={task.checkMark} />           {/* исходя из того, какое значение имеет task.checkMark span будет иметь различные настройки ::before и ::after */}
      <p className={task.checkMark}>                {/* исходя из того, какое значение имеет task.checkMark шрифт будет иметь различные настройки */}
        {task.text}
      </p>
    </div>
  );
}
export default ToDoRow;