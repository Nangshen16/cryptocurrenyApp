import React from 'react'
import { Link, Route,  Routes } from 'react-router-dom';

import { Layout, Space, Typography } from 'antd';
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components';

import './App.css';
import Cryptodetails from './components/CryptoDetails';

const App = () => {
  return (
      //creating navgation bar
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
                <div className="routes">
                    <Routes>

                    
                    
                    <Route path="/" element={<Homepage />} />
                    <Route path="/exchanges" element={<Exchanges />} />
                    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                    <Route path="/crypto/:coinId" element={<Cryptodetails />} />
                    <Route path="/news" element={<News />} />



                        
                         
                    
                    </Routes>
                </div>
            </Layout>
            <div className="footer" >
            <Typography.Title level={5} style={{color:'white',textAlign: 'center'}}>
                CryptoApp<br/>
                All rights reserved

            </Typography.Title>
            <Space>
                <Link to="/">
                    Home
                </Link>
                <Link to="/exchanges">
                    Exchanges
                </Link>
                <Link to="/news">
                    News
                </Link>
            </Space>

         </div>

        </div>
            
        
            

    </div>
  )
}

export default App