import React from "react";
import { useEffect, useState } from 'react';
import * as S from "./Styled";
import { TipagemCards } from "../Dados/Dados";
import { Cards } from "../Cards/Cards";


export const CardsList: React.FC = () => {

    const [products, setProdutos] = useState<TipagemCards[]>([])
    //Buscando dados
    useEffect(() => {
      //Função assincrona
      const fetchProdutos = async () => {
        try {
          //URL da API
          const resposta = await fetch('https://fakestoreapi.com/products')
          //tranformando os dados em json
          const dados: TipagemCards[] = await resposta.json();
          //Atribuindo os dados da API na variavel
          setProdutos(dados)
          console.log(dados)
        }
        catch(erro) {
          console.log("Erro identificado: ", erro)
        }
      }
      fetchProdutos()
    }, [])
      
    return(
        <S.ListCard>
            {products.length > 0 ? ( // Verifica se há produtos no estado
                products.map(product => ( // Mapeia cada produto para um componente Card
                    <Cards 
                    key={product.id} 
                    product={product}
                        
                       
                    />
                ))
            ) : ( // Caso não haja produtos, exibe a mensagem de carregando
                <S.fraseCarregandoProduto>
                    Loading products...
                </S.fraseCarregandoProduto>
            )}
        </S.ListCard>
    )

}