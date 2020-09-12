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

const App = (props) => {
  return (

    <div className='appWrapper'>
      <Header />
      <Navigation />
      <div className='appWrapperContent'>
        <Route path='/dialogs' render={() => <Dialogs
          store={props.store}  state={props.state} />} />
          
        <Route path='/content' render={() => <Profile
          store={props.store}  state={props.state}/>} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/videos' render={() => <Videos />} />
      </div>

    </div>

  );
}

export default App;


