import { activeT, passiveT, filterT } from "./types"

export const ACTIVE: activeT = "active" 
export const PASSIVE: passiveT = ""

export const filterVar: filterT[] = [ // filterVar это массив доступных значений для фильтрации
  { name: "all", value: null },
  { name: "active", value: PASSIVE },
  { name: "completed", value: ACTIVE },
]
