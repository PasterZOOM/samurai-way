import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Body} from './components/Body/Body';
import React from 'react';

export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Body/>
        </div>
    );
}
