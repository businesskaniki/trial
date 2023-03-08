import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='bg-gray-900 h-96 flex items-center justify-center flex-col py-16 sm:py-24 md:py-32 gap-4 font-serif border-t-2 border-gray-700'>
      <h3 className='text-lg'> <span className='text-red-800'>04.</span> Now what next?</h3>
      <h1 className='text-4xl sm:text-5xl md:text-6xl'>LET'S CONNECT</h1>
      <p className='text-center max-w-lg'>Currently, I'm looking for a fullstack development role in your company.</p>
      <button className='border px-8 py-3 text-lg sm:text-xl'>Hire</button>
    </div>
  );
};

export default Contact;
