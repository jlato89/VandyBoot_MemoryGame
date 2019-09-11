import React from 'react';

function Jumbotron({ children }) {
   return (
      <div
         style={{
            height: 300,
            clear: 'both',
            paddingTop: 70,
            color: '#fff',
            textAlign: 'center',
            backgroundColor: '#2c323c'
         }}
         className='jumbotron'
      >
         <h1>Clicky Game!</h1>
         <h3>
            Click on an image to earn points, but don't click on any more than
            once!
         </h3>
      </div>
   );
}

export default Jumbotron;
