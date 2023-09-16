import { ValidUtilits } from "./validation"
import { taskT, filterValueT } from "../redux/types"
import { filterVar } from "../redux/variables"


type eventChangeT = React.ChangeEvent<HTMLInputElement>
type eventKeyBoardT = React.KeyboardEvent<HTMLInputElement>
type onchangeT = (
  e: eventChangeT,
  getInputValue: (arg: string) => void
) => void

type onkeydownT = (
  e: eventKeyBoardT,
  addTasks: (arg: string) => void,
  getInputValue: (arg: string) => void,
  tasks: taskT[]
) => void

type filterT = (tasks: taskT[], sortValue: filterValueT ) => taskT[]

  
export const onchange:onchangeT = (e, getInputValue) => {
  getInputValue(e.target.value) // вводимые данные из input сохр. в Redux
}
export const onkeydown: onkeydownT = (e, addTasks, getInputValue, tasks) => {
  if (e.code === "Enter") {
    // проверка нажатия Enter
    
    const value: string = e.currentTarget.value
    if (ValidUtilits.isValid(value, tasks)) { 
      // проверка на валидацию

      addTasks(value) // добавление новой задачи
      getInputValue("") // удаление текста из инпута
    }  
  }
}
export const filterFunc: filterT = (tasks, sortValue) => {
  const tasksSorted = tasks.filter(task => {
    if (sortValue === filterVar[0].value) return true // если sortValue === null - тогда не фильтруем
    if (sortValue === filterVar[1].value) { // если sortValue === "" - оставляем все task имеющте checkMark = ""
      if (task.checkMark === sortValue) return true
    }
    if (sortValue === filterVar[2].value) { // если sortValue === "active" - оставляем все task имеющте checkMark = "active"
      if (task.checkMark === sortValue) return true
    }
    return false
  }
  )
  return tasksSorted
}
  
