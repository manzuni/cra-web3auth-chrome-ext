import React from 'react';
import Web3AuthModal from './Web3AuthModal';

function App() {
  //Initialize within your constructor

  return (
    <div className='bg-indigo-600 flex items-center justify-center h-screen'>
      <div className='cursor-pointer .antialiased p-5 shadow-xl rounded-full bg-white font-sans font-bold capitalize text-2xl text-black'>
        <Web3AuthModal />
      </div>
    </div>
  );
}

export default App;
