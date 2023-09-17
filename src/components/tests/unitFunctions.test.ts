import { ValidUtilits } from "../utilits/validation" // импорт тестируемых функций 
import { filterFunc } from "../utilits/utilits"
 

import { chackIsValid, chackFilter } from "./suitsTests" // импорт набора входных данных для теста
import { toBeValid, toEqualFilter } from "./testFunction" // импорт специальных функций которые принимают аргументами: входные данные и тестируемую функцию


describe("unit tests", () => {
  toBeValid(chackIsValid, ValidUtilits) // тестирует вылидацию при наборе данных
  toEqualFilter(chackFilter, filterFunc) // тестирует фильтрацию решённых и не решённых задач
})
