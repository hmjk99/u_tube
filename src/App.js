
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Feed from './components/Feed';

function App() {
  return (
    <>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
