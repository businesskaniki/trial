import React from 'react'
import './index.css'

const About = () => {
  return (
    <div className='bg-gray-900 flex items-center justify-center flex-col pb-8'>
        <h1 className='font-serif text-6xl font-thin tracking-wider leading-loose uppercase pb-8'>I'm always interested about</h1>
        <div className='grid grid-cols-3 gap-4 grid-rows-2 uppercase '>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl uppercase wraper'><h2 className='px-6 text-2xl font-serif target1'>Doing some python projects</h2> </div>
          <div className='h-14 border-gray-500 border flex items-center justify-center uppercase rounded-3xl wraper'><h2  className='px-6 text-2xl font-serif target2'>javasSript web development</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center w-40  rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target3'>React</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target4'>fullstack development</h2> </div>
          <div className='h-14 border-gray-500 border flex items-center justify-center w-60  rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target5'>chicken dish</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target'>mentoring junior developers</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center w-80  rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target6'>Cyber securty</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center   rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target7'>open source projects</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target8'>learning new technologies</h2></div>
          <div className='h-14 border-gray-500 border flex items-center justify-center  rounded-3xl wraper'><h2 className='px-6 text-2xl font-serif target9'>technology! i love technology</h2></div>
        </div>
    </div>
  )

  
}

export default About