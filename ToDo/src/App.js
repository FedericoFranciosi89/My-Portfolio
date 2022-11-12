import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import AddTask from './pages/AddTask';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/newTask' element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
