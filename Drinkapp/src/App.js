import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SingleVideo from './pages/SingleVideo';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path=':id' element={<SingleVideo />} />
      </Routes>
    </>
  );
}

export default App;
