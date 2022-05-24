import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PdfPage from "./pages/pdf";
import Demo from "./pages/demo";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="pdf/:encodedUri/:page" element={<PdfPage />} />
        <Route path="demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
}

function Root() {
  return <h1>示例页面</h1>
}

export default App
