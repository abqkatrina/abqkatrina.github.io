import React from 'react';
import './css/index.css';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import Main from './Components/Main.js';


const App = () => {
  return (
    <section className="main">
      <Nav />
      
      <Main />
      
      <Footer />
    </section>
  );
}

export default App;
