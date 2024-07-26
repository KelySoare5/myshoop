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
//Tipagem da action 
interface userAction {
    type: string
    payload?: User
}
// Reducer Guarda o estado que desejamos compartilhar na aplicação, como também, manupula/altera o estado
//Todo reducer precisa returna o estado atualizado
// primeira ação: login 
// segundo ação: logout
export function userReducer(state = initialState, action: userAction): UserState {
    if (action.type === 'user/login') {
        return{
            ...state,
            user: action.payload as User,
        }
    } else if (action.type === 'user/logout'){
        return{
            ...state,
            user: null,
        }
    }
    return state
}