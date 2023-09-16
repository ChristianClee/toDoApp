import { useActions } from "../redux/resuxHooks"
import { toDoSelect } from "../redux/toDoSlice"
import { useSelector } from "react-redux" 
import { useEffect } from "react"

export const useSaveSortedCount = ( length: number  ): void => {
  const { getCountSortedTask } = useActions()
    const { filter,tasks } = useSelector(toDoSelect)

  useEffect(() => {
    getCountSortedTask(length)
  }, [filter.value,tasks])
}
