import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import {RootStateType} from './redux/state';

const App = (props: RootStateType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Body state={props.state}/>
        </div>
    );
}

export default App;
