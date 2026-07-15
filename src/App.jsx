import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import RepoDetail from './components/RepoDetail'
import ProjectDetail from './components/ProjectDetail'
import Resume from './components/Resume'

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">본문 바로가기</a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:repoName" element={<RepoDetail />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
