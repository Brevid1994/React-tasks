import logo from './logo.svg';
import './App.css';

import TextChanges from './Components/ClassWork2/TextChanges.js';
import ChengeSymbol from './Components/ClassWork2/ChengeSymbol.js';



function App() {
  return (
    <div className="App">
      <TextChanges text='asd' size='25' color='red' />
      <TextChanges text='aasdassd' size='20' color='black' />
      <TextChanges text='aasdassd' size='30' color='green' />
      <TextChanges text='asasdasd' size='15' color='blue' underline ='underline'/> 
      <ChengeSymbol/>
    </div>
  );
}

export default App;
