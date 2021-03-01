// import logo from './logo.svg';
import './App.css';

// class work 2
import TextChanges from './Components/ClassWork2/TextChanges.js';
import ChengeSymbol from './Components/ClassWork2/ChengeSymbol.js';

// Homework 2
import Square from './Components/Homework2/Square.js';
import Italic from './Components/Homework2/Italic.js';

// Class work 3
import Loading from './Components/ClassWork3/Spiner.js';
import LoadingProps from './Components/ClassWork3/SpinerWithProps.js';
import Ingridients from './Components/ClassWork3/BurgerMenu'

// Homework 3

// Homework 4



function App() {
  return (
    <div className="App">

      <TextChanges text='asd' size='25' color='red' />
      <TextChanges text='aasdassd' size='20' color='black' />
      <TextChanges text='aasdassd' size='30' color='green' />
      <TextChanges text='asasdasd' size='15' color='blue' underline ='underline'/> 

      <ChengeSymbol/>

      <Square cssClass='big' label='big'/>
      <Square cssClass='medium' label='medium'/>
      <Square cssClass='small' label='small'/>

      <Italic/> 

      <Loading/>
      <LoadingProps/>

      <Ingridients/>

    </div>
  );
}

export default App;
