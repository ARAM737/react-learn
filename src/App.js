import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/navbar/Nav'
import Home from './components/Home';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  return (
    <div className='container'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home  title='Home'/>}/>
                <Route path='/page2' element={<Page2 title='Page2'/>}/>
                <Route path='/page3' element={<Page3 title='Page3'/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
