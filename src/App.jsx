import React from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateContent from './Components/CreateContent'
import HomePage from './Components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListStore from './Store/ProductListStore'

function App() {

  return (
    <BrowserRouter>
      <div className='app-container'>
        <SideBar />
        <div className='header-footer'>
          <Header />
          <ProductListStore>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path="/CreateContent" element={<CreateContent />}></Route>
            </Routes>
          </ProductListStore>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
