import { TipagemCards } from "../Dados/Dados";
import * as S from "./Styled"
import { IoCartOutline} from "react-icons/io5";


// Definindo a interface Product
interface ProductProps {
  product: TipagemCards;
}

export const Cards: React.FC<ProductProps> = ({product}) =>{

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

            <S.BtnCarrinho>
                Adicionar o Carrinho
                <IoCartOutline />
            </S.BtnCarrinho>


        </S.StyledAside>
    )
}