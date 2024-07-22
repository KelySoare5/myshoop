import { createStore } from "redux";
import { rootReducer } from "./root-reducer";

//criando um armazenamento baseado no rootReducer
export const store = createStore(rootReducer)