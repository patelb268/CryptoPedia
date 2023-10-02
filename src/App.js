import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import Navbar from './components/Navbar';
import './styles/App.css';
const App = () => {
  return (
    <div className='App'>
        <div className='navbar'>
            <Navbar />
        </div>
        
    </div>
  )
}

export default App