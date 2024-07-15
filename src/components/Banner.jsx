"use client";
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])
    return (
        <div>
            <div className="hidden md:hidden lg:flex px-[80px] justify-between items-center  mt-[45px] flex-wrap" >
                <div className='flex flex-col ' >
                    <p className='font-apfel text-[64px] text-left text-nowrap leading-none text-[#101828]'>Unlock Your Beauty </p>
                    <p className='font-apfel text-[64px] text-[#101828]text-left text-nowrap leading-none'>Concierge Experience </p>
                    <p className=' font-euclidRegular text-[20px] mt-4  text-[#5f6c80]'>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep </p>


                    <form action="https://getlaunchlist.com/s/52IebT"
                        method="POST"
                        className='launchlist-form grid grid-flow-col mt-[30px] w-full gap-1 '>
                        <input name="name" type="text" placeholder="Enter your name" required className='h-[48px] placeholder:text-slate-400 placeholder:text-[16px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        <input name="email" type="email" placeholder='Enter your email address' required className='h-[48px] placeholder:text-slate-400 placeholder:text-[16px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        <button type="submit" className='h-[48px] cursor-pointer rounded-[14px] bg-[#8877D8] font-euclidRegular text-white grid place-content-center px-10 py-3 w-[200px] text-nowrap border border-[#9F92E0]'>Join Our Waitlist</button>

                    </form>
                </div>
                <img src="/two_women.png" alt="two_women" className="md:mt-6"  />

            </div>
            <div className="hidden md:flex lg:hidden px-6 flex-col mt-[54px]">
                <p className='font-apfel text-[48px] text-black text-left text-nowrap leading-none'>Unlock Your Beauty Concierge</p>
                <p className='font-apfel text-[48px] text-black text-left text-nowrap leading-none'>Experience </p>
                <p className=' font-euclidRegular text-[18px] mt-4  text-[#5f6c80]'>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep </p>
                <div className="mx-auto mt-10">
                    <img src="/two_women.png" alt="two_women" className=" w-[520px] h-[520px] object-contain" />
                </div>
                <div className="mx-auto" >
                <form action="https://getlaunchlist.com/s/52IebT"
                    method="POST"
                    className='launchlist-form grid grid-flow-col mt-10 w-full gap-1'>
                    <input name="name" type="text" placeholder="Enter your name" required className='h-[48px] placeholder:text-slate-400 placeholder:text-[16px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                    <input name="email" type="email" placeholder='Enter your email address' required className='h-[48px] placeholder:text-slate-400 placeholder:text-[16px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        <button type="submit" className='h-[48px] cursor-pointer rounded-[14px] bg-[#8877D8] font-euclidRegular text-white grid place-content-center px-10 py-3 w-[200px] text-nowrap   border border-[#9F92E0]'>Join Our Waitlist</button>
                    </form>
                </div>

            </div>
            <div className="flex md:hidden lg:hidden  px-4 flex-col mt-[24px]">
                <p className='font-apfel text-[36px] text-black text-left leading-none'>Unlock Your Beauty </p>
                <p className='font-apfel text-[36px] text-black text-left leading-none'>Concierge Experience </p>
                <p className=' font-euclidRegular text-[12px] mt-4  text-[#5f6c80]'>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep </p>
                <div className="mx-auto mt-6">
                    <img src="/two_women.png" alt="two_women" className=" w-[381px] h-[381px] object-contain" />
                </div>
                <div className="mx-auto">
                    <form action="https://getlaunchlist.com/s/52IebT"
                        method="POST"
                        className='launchlist-form flex flex-col w-full '>
                        <div className="flex w-full gap-1">
                            <input name="name" type="text" placeholder="Enter your name" required className='h-[48px] text-center placeholder:text-slate-400 placeholder:text-[16px] text-base border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                            <input name="email" type="email" placeholder='Enter your email address' required className='h-[48px] placeholder:text-slate-400 placeholder:text-[16px] text-base border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        </div>

                        <button type="submit" className='mt-4 h-[48px] rounded-[14px] bg-[#8877D8] font-euclidRegular  text-white grid place-content-center w-full py-4 border border-[#9F92E0]'>Join Our Waitlist</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Banner
