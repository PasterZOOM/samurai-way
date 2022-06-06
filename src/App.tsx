import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Body} from './components/Body/Body';
import React from 'react';
import {HeaderContainer} from './components/Header/HeaderContainer';

export const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Body/>
        </div>
    );
}
