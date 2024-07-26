import { useDispatch, useSelector } from "react-redux";
import { TipagemCards } from "../Dados/Dados";
import * as S from "./Styled"
import { IoCartOutline} from "react-icons/io5";
import { RootReducer, rootReducer } from "../../redux/root-reducer";


// Definindo a interface Product
interface ProductProps {
  product: TipagemCards;
}

export const Cards: React.FC<ProductProps> = ({product}) =>{

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
    //Verificando se o produto esta no carrinho ou não
    const isProductOnCart = cart.find((productOnCart) => product.id === productOnCart.id) !== undefined

    const dispatch = useDispatch()
    
    function handleRemoveProductToCard(){
        dispatch({
            type: "cart/remove-product",
            payload: product,
        })
    }

    function handleAddProductToCard(){
        //Despachar a action de add o produto ao carrinho
        dispatch({
            type: "cart/add-product",
            payload: product

        })
        console.log(product.title)
    }

    return(
        <S.StyledAside>


            <S.Imagem src={product.image} alt={product.description}/>

            <S.Descricao>
                {product.title}
            </S.Descricao>

            <S.DivPrecoAvaliacao>
                <S.Avaliacao>({product.rating.rate})</S.Avaliacao>
                <S.Preco>R${product.price}</S.Preco>
            </S.DivPrecoAvaliacao>

            { isProductOnCart ? (
                // {/* Função para remover do carrinho */}
                <S.BtnRemoverCarrinho onClick={handleRemoveProductToCard}>
                Remover do Carrinho
                <IoCartOutline />
                </S.BtnRemoverCarrinho>
            ) : (

                // /* Function para adicionar produto ao carrinho */
                <S.BtnAddCarrinho onClick={handleAddProductToCard}>
                    Adicionar no Carrinho
                    <IoCartOutline />
                </S.BtnAddCarrinho>
            )}

            



        </S.StyledAside>
    )
}