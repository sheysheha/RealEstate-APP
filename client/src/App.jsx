import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/About'
import SignOut from './pages/SignOut'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/SignOut' element={<SignOut/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
