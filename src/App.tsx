import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import {RootStateType} from './redux/state';

type AppPropsType={
    state:RootStateType
}
const App = (props:AppPropsType) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Body state={props.state}/>
            </div>
    );
}

export default App;
