import { useDispatch } from "react-redux";
import { TipagemCards } from "../Dados/Dados";
import * as S from "./Styled"
import { IoCartOutline} from "react-icons/io5";


// Definindo a interface Product
interface ProductProps {
  product: TipagemCards;
}

export const Cards: React.FC<ProductProps> = ({product}) =>{

    const dispatch = useDispatch()

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

            {/* Function para adicionar produto ao carrinho */}
            <S.BtnCarrinho onClick={handleAddProductToCard}>
                Adicionar o Carrinho
                <IoCartOutline />
            </S.BtnCarrinho>


        </S.StyledAside>
    )
}