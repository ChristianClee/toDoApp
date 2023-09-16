export type checkMarkT = "active" | ""
export type filterValueT = null | "" | "active"
export type activeT = "active"
export type passiveT = ""

export type ToDoStateT = {
  inputValue: string;
  tasks: taskT[];
  filter: filterT;
  countSortedTask: number
}

export type filterT =
  { name: "all", value: null } | 
  { name: "active", value: passiveT } |
  { name: "completed", value: activeT } 
  
  
export type taskT = {
  text: string;
  checkMark: checkMarkT;
}