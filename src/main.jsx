import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ProductDetail from "./pages/ClubDetails.jsx";
import ProductPage from "./pages/ClubPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path='/clubs' element={<ClubPage />}></Route>
        <Route path="/club/:id" element={<ClubDetail />} />
    </Routes>
  </Router>,
  </React.StrictMode>,
)
