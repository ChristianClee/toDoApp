import { useActions } from "../../redux/reduxHooks"
import { toDoSelect } from "../../redux/toDoSlice"
import { useSelector } from "react-redux" 
import { useEffect } from "react"

export const useSaveSortedCount = (length: number): void => {
  // это кастомный хук задача которого состоит в том, что бы сохранять
  //  колличество отфильтрованных элементов в Redux, сохранение происходит
  //  каждый раз когда изменяется filter.value или колличество элементов tasks
  const { getCountSortedTask } = useActions()
  const { filter,tasks } = useSelector(toDoSelect)

  useEffect(() => {
    getCountSortedTask(length)
  }, [filter.value ,tasks])
}
