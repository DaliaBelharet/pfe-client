// Dans votre fichier App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SignInForm from './SignInForm'; // Importez votre composant SignInForm
// import LandingPage from './LandingPage'; // Importez votre composant LandingPage
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={SignInForm} />  */}
        <Route path='/index.html' element={<Navigate to="/" />} />
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
