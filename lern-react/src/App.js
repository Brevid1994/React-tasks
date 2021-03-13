import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// class work 2
import TextChanges from './Components/ClassWork2/TextChanges';
import ChengeSymbol from './Components/ClassWork2/ChengeSymbol';

// Homework 2
import Square from './Components/Homework2/Square';
import Italic from './Components/Homework2/Italic';

// Class work 3
import Loading from './Components/ClassWork3/spiner';
import LoadingProps from './Components/ClassWork3/SpinerWithProps';
import Ingridients from './Components/ClassWork3/BurgerMenu'

// Homework 3
import LogIn from './Components/Homework3/LogIn'
import Users from './Components/Homework3/Users'
 

// Homework 4
import SayHello from './Components/Homework4/Greetings'
import Bindning from './Components/Homework4/Bindning'

// Practice
import RandomUser from './Components/Practice/Names.js'



export default function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul className='router-block'>

            <ul className='work'>Class Work2
              <li className='router-item'><Link to="/TextChanges" className='router-item'>TextChanges</Link></li>
              <li className='router-item'><Link to="/ChengeSymbol" className='router-item'>ChengeSymbol</Link></li>
            </ul>

            <ul className='work'>Class Work 3
              <li className='router-item'><Link to="/Loading" className='router-item'>Loading</Link></li>
              <li className='router-item'><Link to="/LoadingProps" className='router-item'>LoadingProps</Link></li>
              <li className='router-item'><Link to="/Ingridients" className='router-item'>Ingridients</Link></li>
            </ul>

            <ul className='work'>Homework 2
              <li className='router-item'><Link to="/Square" className='router-item'>Square</Link></li>
              <li className='router-item'><Link to="/Italic" className='router-item'>Italic</Link></li>
            </ul>

            <ul className='work'>Homework 3
              <li className='router-item'><Link to="/LogIn" className='router-item'>LogIn</Link></li>
              <li className='router-item'><Link to="/Users" className='router-item'>Users</Link></li>

            </ul>

            <ul className='work'>Homework 4
              <li className='router-item'><Link to="/SayHello" className='router-item'>SayHello</Link></li>
              <li className='router-item'><Link to="/Bindning" className='router-item'>Bindning</Link></li>
            </ul>

            <ul className='work'>Practise
              <li className='router-item'><Link to="/RandomUser" className='router-item'>RandomUser</Link></li>
            </ul>

          </ul>
        </nav>

        <Switch>

          <Route path="/TextChanges">
            <TextChanges text='Some text' size='25' color='red' />
            <TextChanges text='Some text' size='20' color='black' />
            <TextChanges text='Some text' size='30' color='green' />
            <TextChanges text='Some text' size='15' color='blue' underline ='underline'/> 
          </Route>

          <Route path="/ChengeSymbol">
            <ChengeSymbol />
          </Route>

          <Route path="/Loading">
            <Loading />
          </Route>

          <Route path="/LoadingProps">
            <LoadingProps load='false' />
            <LoadingProps load='' />
          </Route>

          <Route path="/Ingridients">
            <Ingridients />
          </Route>

          <Route path="/Square">
            <Square cssClass='small' label='small'/>
            <Square cssClass='medium' label='medium'/>
            <Square cssClass='big' label='big'/>
          </Route>

          <Route path="/Italic">
            <Italic />
          </Route>

          <Route path="/LogIn">
            <LogIn />
          </Route>

          <Route path="/Users">
            <Users />
          </Route>

          <Route path="/SayHello">
            <SayHello />
          </Route>

          <Route path="/Bindning">
            <Bindning />
          </Route>

          <Route path="/RandomUser">
            <RandomUser />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
