import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import ImageContainer from './components/ImageContainer';
import './Normalize.css';

function App() {
  return (
     <div className='App' style={{ textAlign: "center" }}>
       <Header />
       <Jumbotron />
       <ImageContainer />
     </div>
  );
}

export default App;
