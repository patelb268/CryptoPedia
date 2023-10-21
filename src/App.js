import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {Layout} from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import './styles/App.css';
const App = () => {
  return (
    <div className='App'>
        <div className='navbar'>
            <Layout>
                <Navbar />
            </Layout>
        </div>

        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                        <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                        <Route path='/news' element={<News />} />
                    </Routes>
                </div>
            </Layout>
        </div>
        
    </div>
  )
}

export default App