import './App.css';
import HomePage from './Pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Food from './Pages/food';
import Login from './Pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
