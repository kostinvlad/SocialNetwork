import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/content' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />          
          <Route path='/videos' component={Videos} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
