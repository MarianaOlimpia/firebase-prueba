import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import { AuthProvider } from './AuthContext';
import Private from './views/Private';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Private exact path='/home' component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
