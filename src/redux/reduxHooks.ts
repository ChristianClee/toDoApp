import { useMemo } from 'react'
import { useDispatch} from 'react-redux'
import type { AppDispatch } from './store'
import { bindActionCreators } from '@reduxjs/toolkit'
import {actions} from './toDoSlice'
export const useAppDispatch: () => AppDispatch = useDispatch


  const rootActions = {
  ...actions
}


export const useActions = () => {
  // useActions это специальная утилита, которая позволяет упростить порядок вызова dispatch в теле функций
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}
