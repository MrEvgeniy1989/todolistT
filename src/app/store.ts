import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { tasksReducer } from "features/TodolistList/Todolist/Task/tasks-reducer"
import { todolistsReducer } from "features/TodolistList/Todolist/todolists-reducer"
import { thunk, ThunkDispatch } from "redux-thunk"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { appReducer } from "app/app-reducer"
import { authReducer } from "features/Login/auth-reducer"

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  app: appReducer,
  todolists: todolistsReducer,
  tasks: tasksReducer,
  auth: authReducer,
})

export const store = legacy_createStore(rootReducer, undefined, applyMiddleware(thunk))

// export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
// export const useAppDispatch = useDispatch<AppDispatchType>
// export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector