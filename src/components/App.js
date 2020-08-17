import React from 'react';
import '../assets/css/App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Input from './Input/Input';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Input width="80%" label="Username" type="text" />
      <Input width="90%" label="Password" type="Password" required={true} />
      <Footer />
    </div>
  );
}

export default App;
