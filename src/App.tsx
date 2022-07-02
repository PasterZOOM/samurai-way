import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Body} from './components/Body/Body'
import React from 'react'
import {Header} from './components/Header/Header'

export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Body/>
        </div>
    )
}
