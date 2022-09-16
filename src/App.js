import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Rate from './pages/Rate';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={< Register/>}/>
        <Route path='/profile' element={< Profile/>}/>
        <Route path='/rate' element={< Rate/>}/>
        <Route path='/*' element={< NotFound/>}/>
      </Routes>
      
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
