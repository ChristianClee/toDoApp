import { checkMarkT, activeT, passiveT, filterT } from "./types"

export const ACTIVE: activeT = "active"
export const PASSIVE: passiveT = ""

export const filterVar: filterT[] = [
  { name: "all", value: null },
  { name: "active", value: PASSIVE },
  { name: "completed", value: ACTIVE },
]
