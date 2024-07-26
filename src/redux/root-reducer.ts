// Junção de todos os reducer da aplicação
//combinerReducers é a função que serve para combinação dos reducer
import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { cartReducer } from "./Cart/cart-reducer";

export const rootReducer = combineReducers({
    userReducer, //Infor dos usuarios
    cartReducer, //Infor do carrinho
})

//tipando o rootReducer
export type RootReducer = ReturnType<typeof rootReducer>