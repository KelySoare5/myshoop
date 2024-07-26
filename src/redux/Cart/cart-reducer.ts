//Guarda os produtos do carrinho

import { TipagemCards } from "../../Components/Dados/Dados";

//estado do carrinho
interface CartState{
    cart: TipagemCards[]
}
//todo estado é um objeto
//Array qye contém os produtos do carrinho
const initialState:CartState = {
    cart: [],
}

//tipagem da action
interface cartAction{
    type: string,
    payload: TipagemCards
}
export function cartReducer(state = initialState, action: cartAction){
    switch(action.type){
        //ação de adicionar o carrinho
        case "cart/add-product":
            return{
                ...state,
                cart: [
                    ...state.cart,
                    action.payload, //Produto que se deseja adicionar no carrinho
                ]
            }
        //Ação de remover do carrinho
        case "cart/remove-product":
            const productToRemove = action.payload
            //se o id do produto for diferente do produto que quero remover, returna os produto, se não tira/filtrar/eliminar o produto do array
            const cartFiltrado = state.cart.filter(product => product.id !== productToRemove.id)

            return{
                ...state,
                cart: cartFiltrado,
            }
        default:
            return state
    }
}