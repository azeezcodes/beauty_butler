"use client"
import React, { useState } from 'react'
import Link from 'next/link';


const Footer = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col bg-[#5B4F90] lg:pt-[120px] pt-[50px] pb-3 relative justify-center w-full  px-[16px] lg:px-0'>
            <p className='font-apfel text-white text-[28px] lg:text-[40px] text-center'>Get exclusive access to your Beauty Butler</p>

            <form action="https://getlaunchlist.com/s/52IebT"
                method="POST"
                className='launchlist-form mt-[30px] font-euclidRegular items-center justify-center hidden lg:flex md:hidden lg:flex-row md:flex-row lg:w-1/2 w-full lg:mx-auto gap-1 rounded-[20px]'>
                <input name="name" type="text" placeholder="Enter your name" required className='h-[48px] placeholder:text-slate-400 placeholder:text-[16px] text-base border font-euclidRegular border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                <input name="email" type="email" placeholder='Enter your email address' required className='h-[48px] font-euclidRegular placeholder:text-slate-400 placeholder:text-[16px] text-base border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                <button type="submit" className='h-[48px] font-euclidMedium cursor-pointer rounded-[8px] md:rounded-[14px] bg-[#8877D8] font-[300] md:text-xs text-[8px]  text-white grid place-content-center px-4 py-2 md:px-10 md:py-3 w-[240px] text-nowrap  border border-[#9F92E0] '>Join Our Waitlist</button>
            </form>
            <form action="https://getlaunchlist.com/s/52IebT"
                method="POST"
                className='launchlist-form flex-col items-center justify-center hidden lg:hidden md:block shadow-sm w-full  p-2 '>
                <div className="flex w-full gap-1">
                    <input name="name" type="text" placeholder="Enter your name" required className='font-euclidRegular h-[36px] placeholder:text-slate-400 text-[14px]  border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[10px]' />
                    <input name="email" type="email" placeholder='Enter your email address' required className='font-euclidRegular h-[36px] placeholder:text-slate-400 text-[14px] border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[10px]' />
                </div>

                <button type="submit" className= 'mt-4 font-euclidMedium text-[14px] h-[46px] rounded-[8px] md:rounded-[10px] bg-[#8877D8] text-white grid place-content-center w-full py-4  border border-[#8877D8]'>Join Our Waitlist</button>
            </form>

            <form action="https://getlaunchlist.com/s/52IebT"
                method="POST"
                className='launchlist-form  items-center justify-center flex flex-col lg:hidden md:hidden shadow-sm w-full  p-2 '>
             
                <input name="name" type="text" placeholder="Enter your name" required className='font-euclidRegular text-[14px] h-[36px] mt-2 placeholder:text-slate-400  text-base border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[10px]' />
                <input name="email" type="email" placeholder='Enter your email address' required className='font-euclidRegular text-[14px] h-[36px] mt-2 placeholder:text-slate-400  text-base border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[10px]' />
                

                <button type="submit" className='mt-4 font-euclidMedium text-[14px] h-[46px] rounded-[8px] md:rounded-[10px] bg-[#8877D8] text-white grid place-content-center w-full py-4  border border-[#8877D8]'>Join Our Waitlist</button>
            </form>


            <p className="font-euclidRegular lg:text-[20px] text-[14px] lg:mt-[40px] mt-[32px] text-center text-white">Follow us for updates and beauty tips!</p>
            <div className="mt-[16px] flex items-center lg:gap-8 gap-4 mx-auto">
                <Link target="_blank" href="https://x.com/mybeautybutler">
                    <div className="lg:h-[48px] h-[34px] lg:w-[48px] w-[34px] rounded-xl grid place-content-center bg-[#F6F5FD]">
                        <img src="/twitter.svg" alt="twitter" className='h-[18px] lg:h-full' />
                    </div>
                </Link>
                <Link target="_blank" href="https://www.instagram.com/mybeautybutler?igsh=YzB4bjc2OWhyc2o4">
                    <div className="lg:h-[48px] h-[34px] lg:w-[48px] w-[34px] rounded-xl grid place-content-center bg-[#F6F5FD]">
                        <img src="/instagram.svg" alt="instagram" className='h-[18px] lg:h-full' />
                    </div>
                </Link>
                <Link target="_blank" href="https://open.substack.com/pub/beautybutler/p/coming-soon?r=46sczw&utm_campaign=post&utm_medium=web">
                <div className="lg:h-[48px] h-[34px] lg:w-[48px] w-[34px] rounded-xl grid place-content-center bg-[#F6F5FD]">
                    <img src="/arcti.svg" alt="arcticons" className='h-[18px] lg:h-full' />
                    </div>
                </Link>
            </div>
            <p className="font-euclidRegular lg:text-[14px] text-[12px] lg:mt-[40px] mt-[67px] text-center text-white">© BeautyButler {new Date().getFullYear()}, All Rights Reserved.</p>


            <div className="absolute right-0 lg:block hidden bottom-6">
                <img src="footerhand.png" alt="footer" className='' />
            </div>

        </div>
    )
}

export default Footer
