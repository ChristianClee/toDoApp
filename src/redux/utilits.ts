import type { taskT, checkMarkT } from "./types"
import {ACTIVE, PASSIVE} from "./variables"



export class ReduxUtilits {
  // создаёт уникальный id
  static createId = (): string => {
    return String(Date.now())
  }

  static createNewTask = (value: string): taskT => {
    // создаёт новый task
    const id = this.createId()
    return {text: value, checkMark: "", id}
  }

  static tuggleTask = (value: checkMarkT): checkMarkT => {
    // сравнивает значения, в ACTIVE находится "active", в PASSIVE находится ""
    if (value === ACTIVE) return PASSIVE
    else return ACTIVE
  }

  static updateTasks = (task: taskT, tasks: taskT[]): taskT[] => {
    // сравнивает task с елементами tasks и если находит одинаковые, то меняет  tasks улементу войство checkMark на "active" или ""
    const result = tasks.map((elem) => {
      if (elem.id === task.id) {
        elem.checkMark = this.tuggleTask(elem.checkMark)
      }
      return elem
      })
    return result
  }


}