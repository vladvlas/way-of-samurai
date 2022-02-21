

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Menu from './componets/Menu/Menu';
import Music from './componets/Music/Music';
import News from './componets/News/News';
import Profile from './componets/Profile/Profile';
import Settings from './componets/Settings/Settings';



const App = (props) => {



  return (

      <div className="wrapper">
        <Header />
        <Menu />
        <div className="wrapper__content">
          <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}
            />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.messagesPage.dialogs}
            messages={props.state.messagesPage.messages} />} />
          <Route path='/news' render={() => <News/>} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>



  );
}

export default App;
