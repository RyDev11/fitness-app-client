import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AppNavbar from "./components/AppNavbar";

 
import Home from "./pages/Home";
import Products from "./pages/Workouts";

import AddProduct from "./components/AddWorkout";
import Register from "./pages/Register";
import Login from './pages/Login';
import Logout from "./pages/Logout";

import { UserProvider } from "./context/UserContext";


function App() {
  





  return (
    <>
      <UserProvider value={{user, setUser, unsetUser}}>
        <Router>
          <AppNavbar/>
          <Container>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workouts" element={<Workouts />} />
              
              <Route path="/addWorkout" element={<AddWorkout />} />
              
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
             

          </Routes>

          </Container>
           <Footer />
        </Router>

      </UserProvider>
    </>

  )
}

export default App;
