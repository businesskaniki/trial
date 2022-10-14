import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900 flex items-center justify-center flex-col pb-8'>
        <h1 className='font-serif text-6xl font-thin tracking-wider leading-loose uppercase pb-8'>I'm always interested about</h1>
        <div className='grid grid-cols-3 gap-4 grid-rows-2 uppercase'>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl uppercase'><h2 className='px-6 text-2xl font-serif'>Doing some python projects</h2> </div>
          <div className='h-14 border-gray-500 border flex items-center justify-center uppercase rounded-3xl'><h2  className='px-6 text-2xl font-serif'>javasSript web development</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center w-40  rounded-3xl'><h2 className='px-6 text-2xl font-serif'>React</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl'><h2 className='px-6 text-2xl font-serif'>fullstack development</h2> </div>
          <div className='h-14 border-gray-500 border flex items-center justify-center w-60  rounded-3xl'><h2 className='px-6 text-2xl font-serif'>chicken dish</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center rounded-3xl'><h2 className='px-6 text-2xl font-serif'>mentoring junior developers</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center w-80  rounded-3xl'><h2 className='px-6 text-2xl font-serif'>Cyber securty</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center   rounded-3xl'><h2 className='px-6 text-2xl font-serif'>open source projects</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl'><h2 className='px-6 text-2xl font-serif'>learning new technologies</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl'><h2 className='px-6 text-2xl font-serif'>technology! i live technology</h2></div>
        </div>
    </div>
  )

  
}

export default About