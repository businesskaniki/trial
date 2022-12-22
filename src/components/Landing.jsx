import React from 'react'
import image1 from './images/boy.png'
import image2 from './images/group.png'

const Landing = () => {
  let divstart = "<div>"
  let divend = "<div/>"
  let start = "<h1>"
  let end = "<h1/>"
  let pstart = "<p>"
  let pend = "<p/>"
  let span = "<span>"
  let spanend = "<span/>"
  return (
    <div className='bg-gray-900 text-white px-16 py-12'>
      <div className='h-80 flex justify-between items-center'>
       <div className='p-8'>
        <h2 className='text-red-900'>{divstart}</h2>
          <div className='flex px-8 flex-col'>
            <span>
              <span className='text-green-900'>{start}</span> 
              <h1 className='text-5xl px-8 font-serif uppercase'>Hey! i am Nicholas Maina</h1> 
              <span className='text-green-900'>{end}</span> 
            </span>
            <span>
              <span className='text-green-900'>{pstart}</span> 
              <p className='px-8 font-mono font-medium'>i’m a software engineer specializing in fullstack development (and occasionally designing) exceptional digital
                    experiences. Currently, I’m focused on building accessible, human-centered products </p> 
             <span className='text-green-900'>{pend}</span>
            </span>
          </div>
        <h2 className='text-red-900'>{divend}</h2>
       </div>
          <img src={image1} alt="background"  className='p-8 img'/>
      </div>
      <div className='h-80 flex justify-between items-center'>
          <img src={image2} alt="background" />
          <div className='p-16'>
        <h2 className='text-red-900'>{divstart}</h2>
          <div className='flex px-8 flex-col'>
            <span>
              <span className='text-green-900'>{start}</span> 
              <h1 className='text-3xl px-8 font-serif uppercase'>Onsite and remote developer</h1> 
              <span className='text-green-900'>{end}</span> 
            </span>
            <span>
              <span className='text-green-900'>{pstart}</span> 
              <p className='px-8 font-mono font-thin'>Experinced on both onsite and remote development. 
              Also master in pair or group programming with over 8000 hours of pair and remote programming</p>
              <span> 
                <span className='text-blue-900 pl-8'>{span}</span> 
                <span className='text-gray-100 underline decoration-wavy decoration-red-900 cursor-progress'>Download resume</span> 
               <span className='text-blue-900'>{spanend}</span>
              </span>
             <span className='text-green-900'>{pend}</span>
            </span>
          </div>
        <h2 className='text-red-900'>{divend}</h2>
       </div>
      </div>
    </div>
  )
}

export default Landing