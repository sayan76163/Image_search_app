// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Imgsearch from './Components/Imgsearch';
import Bookmarks from './Components/Bookmarks';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Imgsearch/>}/>
      <Route path='/bookmark' element={<Bookmarks/>}/>

     </Routes>
    </div>
  );
}

export default App;
