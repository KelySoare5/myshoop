import { StyledGlobal } from './Style/GlobalStyled';
import { Navbar } from './Components/Header/Header';
import { CardsList } from './Components/CardsList/CardsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const App = () => {

  return (
    <Provider store={store}>
      
        <StyledGlobal />
        <Navbar/>
        <CardsList />
    </ Provider>  
    
  );
}





