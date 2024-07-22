// Junção de todos os reducer da aplicação
//combinerReducers é a função que serve para combinação dos reducer
import { combineReducers } from "redux";
import { userReducer } from "./userReducer/reducer";

export const rootReducer = combineReducers({
    userReducer,
})

//tipando o rootReducer
export type RootReducer = ReturnType<typeof rootReducer>