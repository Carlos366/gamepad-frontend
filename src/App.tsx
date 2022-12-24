import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
