import type { taskT, checkMarkT } from "./types"
import {ACTIVE, PASSIVE} from "./variables"



export class ReduxUtilits {
  static createNewTask = (value: string): taskT => {
    // создаёт новый task
    return {text: value, checkMark: ""}
  }

  static tuggleTask = (value: checkMarkT): checkMarkT => {
    // сравнивает значения, в ACTIVE находится "active", в PASSIVE находится ""
    if (value === ACTIVE) return PASSIVE
    else return ACTIVE
  }

  static updateTasks = (task: taskT, tasks: taskT[]): taskT[] => {
    // сравнивает task с елементами tasks и если находит одинаковые, то меняет в tasks улементу со свойством checkMark на "active" или ""
    const result = tasks.map((elem) => {
      if (JSON.stringify(elem) === JSON.stringify(task)) {
        elem.checkMark = this.tuggleTask(elem.checkMark)
      }
      return elem
      })
    return result
  }


}