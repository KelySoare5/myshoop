import { createSlice } from "@reduxjs/toolkit";


// Tipagem das informações dos usuarios
interface User {
    name: string
    email: string
}
//Tipagem do estado que guarda as informações do usuario
interface UserState{
    user: User | null
}

// estado que guarda as informações do usuario
const initialState: UserState = {
    user: null
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    //reducer é como se fosse as action, altera os estados
    //Reducer é um objeto que cada atributo é um metodo e esses metodos recebe uma função
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        }

    }
})