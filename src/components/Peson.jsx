import React from 'react'
import img from './images/image1.png'
import img1 from './images/coffecode.png'

function Peson() {
  return (
    <div className='flex flex-row items-center px-24 py-24'>
      <img src={img1} alt="" />
      <div className='leading-10 tracking-tighter font-serif '>
      <h1 className='text-7xl'> <span className='text-red-800 text-3xl'>02.</span> NICHOLAS MAINA <span className='text-xl'>NICK</span></h1>
        <p className='text-4xl racking-tighter leading-10 uppercase'>
        I use my passion and skills
        to create digital products and
        experiences. As an independent, I
        work hard to improve my software 
        engeneering skills.Strong 
        upcoming developer, driven by passion
        and means serious business
        </p>
      </div>
      <div>
        <img src={img} alt="person" />
      </div>
    </div>
  )
}

export default Peson