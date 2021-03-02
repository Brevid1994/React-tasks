// import logo from './logo.svg';
import './App.css';

// class work 2
import TextChanges from './Components/ClassWork2/TextChanges';
import ChengeSymbol from './Components/ClassWork2/ChengeSymbol';

// Homework 2
import Square from './Components/Homework2/Square';
import Italic from './Components/Homework2/Italic';

// Class work 3
import Loading from './Components/ClassWork3/Spiner';
import LoadingProps from './Components/ClassWork3/SpinerWithProps';
import Ingridients from './Components/ClassWork3/BurgerMenu'

// Homework 3
import LogIn from './Components/Homework3/LogIn'
import data from './data.json'
import Users from './Components/Homework3/Users'
 

// Homework 4



function App() {
  return (
    <div className="App">

      <p className='stop-task'></p>

      <TextChanges text='asd' size='25' color='red' />
      <TextChanges text='aasdassd' size='20' color='black' />
      <TextChanges text='aasdassd' size='30' color='green' />
      <TextChanges text='asasdasd' size='15' color='blue' underline ='underline'/> 

      <p className='stop-task'></p>

      <ChengeSymbol/>

      <p className='stop-task'></p>


      <Square cssClass='big' label='big'/>
      <Square cssClass='medium' label='medium'/>
      <Square cssClass='small' label='small'/>

      <p className='stop-task'></p>


      <Italic/> 

      <p className='stop-task'></p>


      <Loading/>
      <LoadingProps/>

      <p className='stop-task'></p>


      <Ingridients/>

      <p className='stop-task'></p>


      <LogIn />
      { console.log( data ) }
      <Users />

      <p className='stop-task'></p>


    </div>
  );
}

export default App;
