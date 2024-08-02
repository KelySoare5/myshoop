// Junção de todos os reducer da aplicação
//combinerReducers é a função que serve para combinação dos reducer
import { combineReducers } from "redux";
// import { userReducer } from "./User/reducer";
// import { cartReducer } from "./Cart/cart-reducer";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart-slice";

export const rootReducer = combineReducers({
    //userReducer, //Infor dos usuarios ==> forma antiga
    userReducer: userSlice.reducer, //informa usuarios
    //Infor do carrinho
    cartReducer: cartSlice.reducer
    //cartReducer ==> forma antiga
})

//tipando o rootReducer
export type RootReducer = ReturnType<typeof rootReducer>