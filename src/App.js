import logo from './logo.svg';
import './App.css';
import "./componant/Com.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from './componant/Home';
import { User } from './componant/User';
import { Nav } from './componant/Nav';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/UserDetail' element={<User/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
