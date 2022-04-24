import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';

import React from 'react';
import {StateType} from './redux/state';

type AppPropsType = {
    state: StateType
    addPostCallBack: (postMessage: string) => void
    addMessageCallBack: (messageText: string) => void
    newPostTextCallBack: (newText:string) => void
}

const App: React.FC<AppPropsType> =
    ({state, addPostCallBack, addMessageCallBack, newPostTextCallBack}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Body state={state}
                  addPostCallBack={addPostCallBack}
                  addMessageCallBack={addMessageCallBack}
                  newPostTextCallBack={newPostTextCallBack}
            />
        </div>
    );
}

export default App;
