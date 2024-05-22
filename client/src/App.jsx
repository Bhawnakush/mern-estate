import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/Signin'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'


export default function App() {
  return (
  
  <BrowserRouter>
  <Header></Header>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/signUp' element={<SignUp/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>

    <Route path='/about' element={<About/>}> </Route>
    <Route  element={<PrivateRoute/>}>  <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/create-listing' element={<CreateListing/>}></Route>
      
    </Route>
  </Routes>
  </BrowserRouter>
  
  )
}
 