import { useContext } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import Unauthrouter from './routers/Unauthrouter';

function App() {
    const { auth } = useContext(AuthContext);
  return (
    <div className="App" > {auth ? < AuthRouter /> : < Unauthrouter />}
    </div>
    );
}

export default App;