import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240PX] mx-auto grid md:grid-cols-2'>
            <img src={laptop} alt="img"  className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally </h1>
              <p >Phasellus eu laoreet eros. 
                Ut elementum, velit a dictum finibus, nisi lectus placerat libero,
                 non dictum elit nisl dictum neque. Aliquam erat volutpat. Mauris
                  neque lorem, vehicula bibendum arcu ac, eleifend venenatis velit. 
                  Phasellus sed sapien sapien. Pellentesque ultricies dapibus neque. 
                Integer ligula nunc, auctor et dui tincidunt, varius convallis nulla.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
            </div>

        </div>
        
    </div>
  )
}

export default Analytics