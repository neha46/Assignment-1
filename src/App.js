import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Guest from './pages/Guest';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Guest/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
