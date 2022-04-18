import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import {RootStateType} from './redux/state';
import React from 'react';

const App: React.FC<RootStateType> = ({state}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Body state={state}/>
        </div>
    );
}

export default App;
