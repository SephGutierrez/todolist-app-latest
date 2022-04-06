import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './Create';
import NoteDetails from './NoteDetails';
import NotFound from './NotFound';




function App() {
  
 
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <div className="content">
              <Routes>
                  <Route path='/' element={<Home />} />     
                  <Route path='/create' element={<Create />} />
                  <Route path='/notes/:id' element={<NoteDetails />} />
                  <Route path='*' element={<NotFound />} />          
              </Routes>
            </div>
          </div>
    </BrowserRouter>
  );
}
 
export default App;
 