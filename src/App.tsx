import { StyledGlobal } from './Style/GlobalStyled';
import { Navbar } from './Components/Header/Header';
import { CardsList } from './Components/CardsList/CardsList';

export const App = () => {

  return (
    <>
      <StyledGlobal />
      <Navbar/>
      <CardsList />   
    </>
  );
}





