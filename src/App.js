import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Books from './components/Books';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:movies' element={<Books/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
