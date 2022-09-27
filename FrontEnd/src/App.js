import './App.css';
import HomePage from './Pages';
import Food from './Pages/food';
import Login from './Pages/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Pages/register';
import AdminDashboard from './Pages/admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/reg" element={<Register/>}/>
          <Route path="/AdminDash" element={<AdminDashboard/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
