import { taskT, filterValueT } from "../../redux/types"

export type testSuitesT = { expect: boolean; inputData: [string, taskT[]] }[]
export type chackFilterT = { expect: taskT[], inputData:[list: taskT[],  sortValue: filterValueT] }[]


export const chackIsValid: testSuitesT = [
  {
    expect: false, // сойство expect это ожидаемый правильный ответ
    inputData:  [ "сделать уроки" ,[{ text: "сделать уроки", id: "12342334", checkMark: "" }]] // свойство inputData это набор аргументов для функции
  },
  {
    expect: false,
     inputData:  [ "" ,[{ text: "сделать уроки", id: "12342334", checkMark: "" }]]
  },
  {
    expect: true,
     inputData:  [ "посмотреть телевизор" ,[{ text: "сделать уроки", id: "12342334", checkMark: "" }]]
  },
    {
    expect: false, inputData: [
      "сделать уроки", [
    { text: "сделать уроки", id: "124342334", checkMark: "" },
    { text: "убрать мусок", id: "12342334", checkMark: "" },
    { text: "купить продукты", id: "124342334", checkMark: "" }
  ]] },
]

export const chackFilter: chackFilterT = [
  {
    expect: [
      { text: "сделать уроки", id: "12342334", checkMark: "active" },
    ],

    inputData:[ [
      { text: "сделать уроки", id: "12342334", checkMark: "active" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
    ], "active" ]
  },
  {
    expect: [
      { text: "вынести мусор", id: "12342334", checkMark: "" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
    ],

    inputData:[ [
      { text: "сделать уроки", id: "12342334", checkMark: "active" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
    ], "" ]
  },
  {
    expect: [
      { text: "сделать уроки", id: "12342334", checkMark: "active" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
    ],

    inputData:[ [
      { text: "сделать уроки", id: "12342334", checkMark: "active" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
      { text: "вынести мусор", id: "12342334", checkMark: "" },
    ], null ]
  },

]