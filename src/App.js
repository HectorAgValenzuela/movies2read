import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Books from './components/Books';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:movies' element={<Books/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
