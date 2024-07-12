import React from 'react'

const Banner = () => {
  return (
      <div className='flex flex-col md:flex-row lg:flex-row px-2 md:px-[50px] lg:px-[80px] justify-between items-center mt-[23px] lg:mt-[45px] md:mt-[36px]'>
          <div className='flex flex-col ' >
              <p className='font-bold text-[25px] md:text-[32px] lg:text-[68px] text-black text-left'>Unlock Your Beauty </p>
              <p className='lg:mt-[-18px] mt-[-2px] font-bold text-[25px]  md:text-[32px] lg:text-[68px] text-black text-left '>Concierge Experience </p>
              <p className='font-[300] lg:font-normal  text-[12px] lg:text-[20px] md:text-[16px] mt-2 lg:mt-4 '>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep </p>
              <form action="https://getlaunchlist.com/s/52IebT"
                  method="POST"
                  className='launchlist-form mt-[30px] items-center justify-center hidden lg:flex md:flex lg:flex-row md:flex-row shadow-sm w-full h-[55px] border border-gray-100 rounded-[20px] p-2 '>
                  <input name="name" type="text" placeholder="Enter your name" required className='placeholder:text-slate-400 placeholder:text-[12px] text-base border-0 outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full' />
                  <input name="email" type="email" placeholder='Enter your email address' required className='placeholder:text-slate-400 placeholder:text-[12px] text-base border-0 outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full' />
                  <button type="submit" className='cursor-pointer rounded-[8px] md:rounded-[14px] bg-[#8877D8] font-[300] md:text-xs text-[8px]  text-white grid place-content-center px-4 py-2 md:px-10 md:py-3 w-[240px] text-nowrap '>Join Our Waitlist</button>
                
              </form>
          </div>
          <div>
              <img src="/two_women.png" alt="two_women" className=" w-[380px] h-[380px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] object-contain mt-[px] lg:mt-0 md:mt-[24px]" />
          </div>
          <div className='flex items-center justify-center lg:hidden md:hidden shadow-sm w-full h-[55px] border border-gray-100 rounded-[20px] p-2 '>
              <input type="text" placeholder='Enter your email address' className='placeholder:text-slate-400 text-[10px] border-0 outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full' />
              <button className=' rounded-[8px] md:rounded-[14px] bg-[#8877D8] font-[300] md:text-xs text-[8px]  text-white grid place-content-center w-[123px] h-[32px]'>Join Our Waitlist</button>
           </div>
      </div>
  )
}

export default Banner
