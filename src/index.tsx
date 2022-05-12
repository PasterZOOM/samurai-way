import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {store, StoreType} from './redux/reduxStore';

export const renderEntireTree = (state: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())
store.subscribe(() => {
    renderEntireTree(store.getState())
})