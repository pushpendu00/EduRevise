import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PdfPage from './pages/PdfPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/pdfs" element={<PdfPage />} />
        <Route path="/" element={
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl font-bold underline">
              Welcome to EduRevise!
            </h1>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App;