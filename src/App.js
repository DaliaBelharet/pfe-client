// Dans votre fichier App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignInForm from './SignInForm'; // Importez votre composant SignInForm
import LandingPage from './LandingPage'; // Importez votre composant LandingPage

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} /> {/* Page de landing */}
        <Route path="/signin" component={SignInForm} /> {/* Page de connexion */}
      </Switch>
    </Router>
  );
}

export default App;
