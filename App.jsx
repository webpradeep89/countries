import React, { useState } from 'react';
import Header from './component/Header';
import './App.css'
import { Outlet } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App;