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
import Loading from './Components/ClassWork3/Spiner';
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

            <ul>Class Work2
              <li><Link to="/TextChanges">TextChanges</Link></li>
              <li><Link to="/ChengeSymbol">ChengeSymbol</Link></li>
            </ul>

            <ul>Class Work 3
              <li><Link to="/Loading">Loading</Link></li>
              <li><Link to="/LoadingProps">LoadingProps</Link></li>
              <li><Link to="/Ingridients">Ingridients</Link></li>
            </ul>

            <ul>Homework 2
              <li><Link to="/Square">Square</Link></li>
              <li><Link to="/Italic">Italic</Link></li>
            </ul>

            <ul>Homework 3
              <li><Link to="/LogIn">LogIn</Link></li>
              <li><Link to="/Users">Users</Link></li>

            </ul>

            <ul>Homework 4
              <li><Link to="/SayHello">SayHello</Link></li>
              <li><Link to="/Bindning">Bindning</Link></li>
            </ul>

            <ul>Homework 5
              <li></li>
            </ul>

            <ul>Practise
              <li><Link to="/RandomUser">RandomUser</Link></li>
            </ul>

          </ul>
        </nav>

        <Switch>

          <Route path="/TextChanges">
            <TextChanges text='asd' size='25' color='red' />
            <TextChanges text='aasdassd' size='20' color='black' />
            <TextChanges text='aasdassd' size='30' color='green' />
            <TextChanges text='asasdasd' size='15' color='blue' underline ='underline'/> 
          </Route>

          <Route path="/ChengeSymbol">
            <ChengeSymbol />
          </Route>

          <Route path="/Loading">
            <Loading />
          </Route>

          <Route path="/LoadingProps">
            <LoadingProps />
          </Route>

          <Route path="/Ingridients">
            <Ingridients />
          </Route>

          <Route path="/Square">
            <Square cssClass='big' label='big'/>
            <Square cssClass='medium' label='medium'/>
            <Square cssClass='small' label='samll'/>
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
