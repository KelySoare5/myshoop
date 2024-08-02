Obejtivo do projeto
{
    O projeto é um loja online voltado a moda
}

Objetivo do desenvolvimento
{
    O projeto desenvolvido utilizou o conceito CSS in JS,  Styled components.
}
Instalações
{
    npm install styled-compenents
    npm i styled-components  //para ts     
    vscode-styled-components //extensão
    npm install react-icons --save
    npm install redux
    npm install @reduxjs/toolkit
}
API utilizada
{
    https://fakestoreapi.com/products
}

Arquivos criados
{
    1 - App
    2 - Style
        2.1 GlobalStyled
    3 - Components
        3.1 - Header 
        3.2 - Cards  
        3.3 - CardList
        3.4 - Dados
        3.5 - Carrinho
    4 - redux
        4.1 - User
            4.1.1 -reducer
            4.1.2 - user-slice
        4.2 - root-reducer
        4.3 - store
        4.4 - Cart
            4.4.1 - cart-reducer
            4.4.2 - cart-slice




}

Funçoes de cada Aequivos criados
{
    1 - Importando o GlobalStyled, Header, Cards e fazendo integração com API
    2 - Estilos Globais
    3.1 - Componente apresentando o NavBar na tela
    3.2 - Componente apresentando o card com imagem e informações na tela
    3.3 - Estilizando os cards, deixando responsivos utilizando o flex-box
    3.4 - Tipagem dos produtos
    3.5 - Aba lateral que abri ao aberta no botão de carrinho
    4.1 - A pasta contém informações do usuário
        4.1.1 - Abordagem antiga com o conceito de reducer
        4.1.2 - Nova abordagem usando o slices
    4.2 - Junção de todos os reducer da aplicação
    4.3 - Criando um armazenamento baseado no rootReducer
    4.4 - Pasta que contém informação do carrinho
        4.4.1 - Abordagem antiga com o conceito de reducer
        4.4.2 - Nova abordagem usando o slices
}
Atualizações da forma antiga e nova{
    No arquivo 4.3, a função store chamava o metodo createStore, no entanto, essa abordagem é considerada ultrapassada.
    Nessa nova abordagem, o Slices é quem guarda e altera o estado, enquanto que, o reducer recebi o conceito das actions.
    nos arquivos.
    Nos arquivos 4.1.1 e 4.4.1 é é usado o reducer, onde é necessario adicionar o action type e payload, atribuir tipagem e valos. Nos arquivos 4.1.2 e 4.4.2, utilizando a nova abordagem, não é necessario o return e os nomes dos atribitos do reducer é o valor do type.
}

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->
