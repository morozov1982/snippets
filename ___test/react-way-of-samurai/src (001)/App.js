import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {

  let dialogsPage = props.state.dialogsPage;
  let profilesPage = props.state.profilesPage;

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Route path='/profile' render={ () => <Profile profilesPage={profilesPage} dispatch={props.dispatch} /> } />
        <Route path='/dialogs' render={ () => <Dialogs dialogsPage={dialogsPage} dispatch={props.dispatch} /> } />
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