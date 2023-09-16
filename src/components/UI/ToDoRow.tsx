import React from 'react';
import { taskT  } from "../../redux/types"
import { useActions } from "../../redux/resuxHooks"


type ToDoRowT = {
  task: taskT
}

const ToDoRow: React.FC<ToDoRowT> = ({ task }) => {
  // это строка каждого из task
  const { tuggleTasks } = useActions()

  return (
    <div className="todo__row todo__row--anim">
      <span
        className={task.checkMark}
        onClick={() => {
          tuggleTasks(task)
        }}
      />
      <p
        className={task.checkMark}>{task.text}
      </p>
    </div>
  );
}
export default ToDoRow;