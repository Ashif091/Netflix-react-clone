import Navbar from "./components/Navbar"

import "./App.css"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import Account from "./pages/Account"


function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<SignUp/>}> </Route>
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute> }> </Route>
      </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App

