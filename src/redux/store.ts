// import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

// Forma antiga 
//export const store = createStore(rootReducer)

//criando um armazenamento baseado no rootReducer
export const store = configureStore({
    reducer: rootReducer,
    
})