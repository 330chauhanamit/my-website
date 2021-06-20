// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Tools from './Components/Tools';
import Work from './Components/Work';
import Footer from './Components/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
     <>
     <Router>
      <Navbar/>
        <Switch>
        <Route path='/' exact component={Home} />
       </Switch>
       <Tools/>
       <Work/>
       <Footer/>
     </Router>
      </>
   
  );
}

export default App;
