import { createSlice } from '@reduxjs/toolkit'
import { ReduxUtilits } from './utilits'
import { filterVar } from "./variables"
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { ToDoStateT, taskT, filterT } from './types'



const initialState: ToDoStateT = {
  inputValue: "",
  tasks: [],
  filter: filterVar[0],
  countSortedTask: 0,
}

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    getInputValue(state, action: PayloadAction<string>) {
      // просто меняет inputValue на action.payload
      state.inputValue = action.payload
    },
    addTasks(state, action: PayloadAction<string>) {
      // добавляет новые задачи
      const newTask = ReduxUtilits.createNewTask(action.payload)
      state.tasks.push(newTask)
    },
    tuggleTasks(state, action: PayloadAction<taskT>) {
      // меняет состояние задач на активные или пассивные
      const newTasks = ReduxUtilits.updateTasks(action.payload, state.tasks)
      state.tasks = newTasks
    },
    setFilter(state, action: PayloadAction<filterT>) {
      state.filter = action.payload
    },
    getCountSortedTask(state, action: PayloadAction<number>) {
      state.countSortedTask = action.payload
    },
    cleanTasks(state) {
      state.tasks = []
    }


  },
})

export const toDoSelect = (state: RootState) => state.toDo
export const {actions, reducer} = toDoSlice

