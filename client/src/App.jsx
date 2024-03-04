import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/Signin'
import Header from './components/Header'


export default function App() {
  return (
  
  <BrowserRouter>
  <Header></Header>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/signUp' element={<SignUp/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/about' element={<About/>}> </Route>
  </Routes>
  </BrowserRouter>
  
  )
}
