import React from 'react'

function Header() {
   return (
      <div
         className='headerContainer'
         style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '28px'}}
      >
         <span className='headerTitle'>
            Clicky Game
         </span>
         <span className='headerInfo'>
            Click an image to begin!
         </span>
         <span className='headerScore'>
            Score: SCORE | Top Score: TOPSCORE
         </span>
      </div>
   );
}

export default Header;