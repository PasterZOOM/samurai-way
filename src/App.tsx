import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import React from 'react';
import {StateType} from './redux/state';

type AppPropsType = {
    state: StateType
    dispatch: (action: any) => void
}

const App: React.FC<AppPropsType> =
    ({state, dispatch}) => {
        return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Body state={state}
                      dispatch={dispatch}
                />
            </div>
        );
    }

export default App;
