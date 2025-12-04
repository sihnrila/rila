import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import RepoDetail from './components/RepoDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:repoName" element={<RepoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
