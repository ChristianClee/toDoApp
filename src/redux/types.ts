export type checkMarkT = "active" | ""           
export type filterValueT = null | "" | "active"
export type activeT = "active"
export type passiveT = ""

export type ToDoStateT = {                        // тип для initialState Redux 
  inputValue: string;
  tasks: taskT[];
  filter: filterT;
  countSortedTask: number
}

export type filterT =                             // тип для фильтра
  { name: "all", value: null } | 
  { name: "active", value: passiveT } |
  { name: "completed", value: activeT } 
  
  
export type taskT = {                             // тип для задачи
  text: string;
  checkMark: checkMarkT;
  id: string
}