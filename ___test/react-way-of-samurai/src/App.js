import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
        <Route path='/dialogs' render={ () => <DialogsContainer /> } />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/news' component={ News } />
        <Route path='/music' component={ Music } />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;

//**************************************************//
// =======   К О Н С П Е К Т   =====================//
//**************************************************//

// <Route> обязательно оборачивать <BrowserRouter> (см. index.js) 
// <Route path='' component={} />  -  отображать компонент из {},
                      //  если в адресной строке ссылка из path=''
            //  exact  -  только если URL точно совпадает