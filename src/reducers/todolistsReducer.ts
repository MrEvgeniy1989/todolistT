import {FilterType, initialStateTodolistsType, TodolistType} from "../App";

type actionType =
    | changeFilterACType
    | deleteTodolistACType
    | addTodolistACType
    | updateTodoTitleACType

type changeFilterACType = ReturnType<typeof changeFilterAC>
export type deleteTodolistACType = ReturnType<typeof deleteTodolistAC>
export type addTodolistACType = ReturnType<typeof addTodolistAC>
type updateTodoTitleACType = ReturnType<typeof updateTodoTitleAC>

export const todolistsReducer = (state: initialStateTodolistsType, action: actionType): initialStateTodolistsType => {
    switch (action.type) {
        case 'CHANGE_FILTER':
            return state.map((todolist) => todolist.id === action.payload.todolistId ? {
                ...todolist,
                filter: action.payload.newFilter
            } : todolist)
        case "DELETE_TODOLIST":
            return state.filter(todolist => todolist.id !== action.payload.todolistId)
        case "ADD_TODOLIST":
            const newTodolist: TodolistType = {
                id: action.payload.todolistId,
                todoTitle: action.payload.newTodolistTitle,
                filter: 'all'
            }
            return [newTodolist, ...state]
        case "UPDATE_TODOLIST_TITLE":
            return state.map(todolist => todolist.id === action.payload.todolistId ? {
                ...todolist,
                todoTitle: action.payload.newTodolistTitle
            } : todolist)
        default:
            return state
    }
}

export const changeFilterAC = (todolistId: string, newFilter: FilterType) => ({
    type: 'CHANGE_FILTER',
    payload: {todolistId, newFilter}
} as const)
export const deleteTodolistAC = (todolistId: string) => ({
    type: 'DELETE_TODOLIST',
    payload: {todolistId}
} as const)
export const addTodolistAC = (todolistId: string, newTodolistTitle: string) => ({
    type: 'ADD_TODOLIST',
    payload: {todolistId, newTodolistTitle}
} as const)
export const updateTodoTitleAC = (todolistId: string, newTodolistTitle: string) => ({
    type: 'UPDATE_TODOLIST_TITLE',
    payload: {todolistId, newTodolistTitle}
} as const)