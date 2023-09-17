import {taskT } from "../../redux/types"


export class ValidUtilits {
  static isEmpty(value: string): boolean {
    // проверка на пустую строку
    return (value === "") ? true : false
  }

  static isCoppy(value: string, tasks: taskT[]): boolean {
    // проверка на пустую копию
    for (let task of tasks) {
      if (value === task.text) return true
    }
    return false
  }

  static isValid(value: string, tasks: taskT[]) {
    // проверка общая
    if (this.isEmpty(value) || this.isCoppy(value, tasks)) {
      return false
    } else  return true 
  }
}