import type { testSuitesT,chackFilterT } from "./suitsTests" 
import { taskT, filterValueT } from "../../redux/types"
type funcT1 = {
  isValid: (arg1: string, arg2: taskT[]) => boolean,
  isCoppy: (arg1: string, arg2: taskT[]) => boolean,
  isEmpty: (arg1: string) => boolean,
}
type funcT2 = (arg1: taskT[], agr2: filterValueT)=> taskT[]

type toBeValidT = (list: testSuitesT, func: funcT1) => void

type toEqualFilter = ( list: chackFilterT, func: funcT2 ) => void


export const toBeValid: toBeValidT = (list, func) => {
  // list это массив состоящий из inputData - это аргументы для функции, и expect - это ожидаемый правильный ответ
  // func это тестируемая функция которая была импортированна для проверки
  list.forEach(item => {
    const received = func.isValid(...item.inputData)
    test(`expect ${item.expect}, received ${received} `, () => {
      expect(received).toBe(item.expect)
    })
  })
}

export const toEqualFilter: toEqualFilter = (list, func) => {
  list.forEach(item => {
    const received = func(...item.inputData)
     test(`expect ${item.expect}, received ${received} `, () => {
      expect(received).toEqual(item.expect)
    })
  })
}