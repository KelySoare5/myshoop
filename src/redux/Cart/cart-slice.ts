import { createSlice } from "@reduxjs/toolkit";
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

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        //Adicionar produto
        addProduct: (state, action) => {
            state.cart = [
                //pega o estado atual e adiciona o payload no estado
                ...state.cart,
                action.payload
            ]
        },
        removeProduct: (state, action) => {
            const productToRemove = action.payload
            //se o id do produto for diferente do produto que quero remover, returna os produto, se não tira/filtrar/eliminar o produto do array
            const cartFiltrado = state.cart.filter(product => product.id !== productToRemove.id)


            state.cart = cartFiltrado
        }
    }
})

export const {addProduct, removeProduct} = cartSlice.actions