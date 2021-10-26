import logo from './logo.svg';
import './App.css';
import Register from './pages/register';
import Dashboard from './pages/dashboard/dashboard';
import { Route, Switch } from 'react-router';
import Plane from './pages/dashboard/pages/plane';
import Introduction from './pages/tizimga kirish/introduction';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <Register/>
      <Dashboard  />
     
    </div>
  );
}

export default App;
