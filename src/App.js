import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ImageContainer from './components/ImageContainer';
import './App.css';

function App() {
  return (
     <div className='App' style={{ textAlign: "center" }}>
       <Header />
       <Banner />
       <ImageContainer />
     </div>
  );
}

export default App;
