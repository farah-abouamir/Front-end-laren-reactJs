import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignUpForm from './components/SignInForm/SignUpForm';
import depot from './pages/depot';
import Docs from './pages/documentation';
import Footer from './components/Footer/Footer';
import signin from './pages/signin';
function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signin' component={signin}/>
      <Route path='/documentation' component={Docs}  />
      <Route path='/depot' component={depot} />
      <Route path='/SignUpForm' component={SignUpForm}/>
      </Switch> 
    </Router>
  );
}

export default App;
