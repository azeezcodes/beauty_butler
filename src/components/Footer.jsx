"use client"
import React, { useState } from 'react'
import LinkModal from './LinkModal'

const Footer = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col bg-[#5B4F90] lg:pt-[120px] pt-[50px] pb-3 relative justify-center w-full  px-[16px] lg:px-0'>
            <p className='font-bold text-white text-[28px] lg:text-[40px] text-center'>Be the First to Experience Beauty Butler</p>

            <form action="https://getlaunchlist.com/s/52IebT"
                method="POST"
                className='launchlist-form mt-[30px] items-center justify-center  flex shadow-sm lg:w-1/3 w-full lg:mx-auto lg:h-[55px] h-fit border border-gray-100 rounded-[20px] p-2 bg-[#F6F5FD]'>
                <input name="name" type="text" placeholder="Enter your name" required className='placeholder:text-slate-400 placeholder:text-[12px] text-base border-0 outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full' />
                <input name="email" type="email" placeholder="Enter your email" required className='placeholder:text-slate-400 placeholder:text-[12px] text-base border-0 outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full' />
                <button type="submit" className='cursor-pointer rounded-[8px] md:rounded-[14px] bg-[#8877D8] font-[300] md:text-xs text-[8px]  text-white grid place-content-center px-4 py-2 md:px-10 md:py-3 w-fit lg:w-[240px] text-nowrap '>Join Our Waitlist</button>
                
                {/* <input type="email" placeholder='Enter your email address' className='placeholder:text-slate-400 placeholder:text-[12px] text-base border-0 outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full' />
                <button type='submit' className='cursor-pointer rounded-[8px] md:rounded-[14px] bg-[#8877D8] font-[300] md:text-xs text-[8px]  text-white grid place-content-center px-4 py-2 md:px-10 md:py-3 w-fit lg:w-[240px] text-nowrap '>Join Our Waitlist</button> */}
            </form>
            {/* {open && <LinkModal open={open} setOpen={() => setOpen(!open)} />} */}
            <p className="font-[400] lg:text-[20px] text-[14px] lg:mt-[40px] mt-[32px] text-center text-white">Follow us for updates and beauty tips!</p>
            <div className="mt-[16px] flex items-center lg:gap-8 gap-4 mx-auto">
                <div className="lg:h-[48px] h-[34px] lg:w-[48px] w-[34px] rounded-xl grid place-content-center bg-[#F6F5FD]">
                    <img src="/twitter.png" alt="twitter" className='object-cover' />
                </div>
                <div className="lg:h-[48px] h-[34px] lg:w-[48px] w-[34px] rounded-xl grid place-content-center bg-[#F6F5FD]">
                    <img src="/instagram.png" alt="instagram" className='object-cover' />
                </div>
                <div className="lg:h-[48px] h-[34px] lg:w-[48px] w-[34px] rounded-xl grid place-content-center bg-[#F6F5FD]">
                    <img src="/arcticons.png" alt="arcticons" className='object-cover' />
                </div>
            </div>
            <p className="font-[400] lg:text-[14px] text-[12px] lg:mt-[40px] mt-[67px] text-center text-white">© BeautyButler {new Date().getFullYear()}, All Rights Reserved.</p>


            <div className="absolute right-0 lg:block hidden bottom-6">
                <img src="footerhand.png" alt="footer" className='' />
            </div>

        </div>
    )
}

export default Footer
