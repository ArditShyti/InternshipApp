import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import AnimalList from './pages/animalPage';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/animals/:type" element={<AnimalList />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
