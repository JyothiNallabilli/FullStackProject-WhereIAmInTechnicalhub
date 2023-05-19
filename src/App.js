// import logo from './logo.svg';
import './App.css';
import Search from './Project/Search';
import Trainers from './Project/Trainers';
import Home from './Project/Home';
import Students from './Project/Students';
import SigninPage from './Project/SigninPage';
import Rooms from './Project/Rooms';
import Dashboard from './Project/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/SigninPage' element={<SigninPage/>}/>
     <Route path='/Trainers' element={<Trainers/>}/>
     <Route path='/Students' element={<Students/>}/>
     <Route path='/Search' element={<Search/>}/>
     <Route path='/Rooms' element={<Rooms/>}/>
     <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>

      


    );
}

export default App;
