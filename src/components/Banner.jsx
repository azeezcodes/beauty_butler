"use client";

import Image from "next/image";



const Banner = () => {
  
    return (
        <div>
            <div className="hidden md:hidden lg:flex px-[80px] justify-between items-center pt-[100px] mt-[45px] flex-wrap" >
                <div className='flex flex-col ' >
                    <p className='font-apfel text-[64px] text-left text-nowrap leading-none text-[#101828]'>Unlock Your Beauty </p>
                    <p className='font-apfel text-[64px] text-[#101828] text-left text-nowrap leading-none'>Concierge Experience </p>
                    <p className=' font-euclidRegular text-[20px] mt-4  text-[#475467]'>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep </p>


                    <form action="https://getlaunchlist.com/s/52IebT"
                        method="POST"
                        className='launchlist-form grid grid-flow-col mt-[30px] w-full gap-1 '>
                        <input name="name" type="text" placeholder="Enter your name" required className='h-[48px] placeholder:text-slate-400 text-[14px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        <input name="email" type="email" placeholder='Enter your email address' required className='h-[48px] placeholder:text-slate-400 text-[14px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        <button type="submit" className='h-[48px] cursor-pointer rounded-[14px] bg-[#8877D8] font-euclidMedium text-white grid place-content-center px-10 py-3 w-[200px] text-nowrap border border-[#9F92E0]'>Join Our Waitlist</button>

                    </form>
                </div>
                <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1721313822/beautybut-hero_ay1nso.svg" alt="two_women_large" className="md:mt-6"  />

            </div>
            <div className="hidden md:flex lg:hidden px-6 flex-col mt-[54px] pt-[100px]">
                <p className='font-apfel text-[48px] text-left text-nowrap leading-none text-[#101828]'>Unlock Your Beauty Concierge</p>
                <p className='font-apfel text-[48px] text-[#101828] text-left text-nowrap leading-none'>Experience </p>
                <p className=' font-euclidRegular text-[18px] mt-4  text-[#475467]'>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep </p>
                <div className="mx-auto mt-10 w-[520px] h-[520px]">
                    <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1721313822/beautybut-hero_ay1nso.svg"
                        alt="two_women_style"
                       
                         />
                </div>
                <div className="mx-auto" >
                <form action="https://getlaunchlist.com/s/52IebT"
                    method="POST"
                    className='launchlist-form grid grid-flow-col mt-10 w-full gap-1'>
                    <input name="name" type="text" placeholder="Enter your name" required className='h-[48px] placeholder:text-slate-400 text-[14px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                    <input name="email" type="email" placeholder='Enter your email address' required className='h-[48px] placeholder:text-slate-400 text-[14px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        <button type="submit" className='h-[48px] cursor-pointer rounded-[14px] bg-[#8877D8] font-euclidMedium text-white grid place-content-center px-10 py-3 w-[200px] text-nowrap text-[14px]   border border-[#9F92E0]'>Join Our Waitlist</button>
                    </form>
                </div>

            </div>
            <div className="flex md:hidden lg:hidden  px-4 flex-col mt-[24px] pt-[100px]">
                <p className='font-apfel text-[40px] text-[#101828] text-left leading-none'>Unlock Your Beauty </p>
                <p className='font-apfel text-[40px] text-[#101828] text-left leading-none mt-2'>Concierge Experience </p>
                <p className=' font-euclidRegular text-[18px] mt-4  text-[#475467]'>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep </p>
                <div className="mx-auto mt-6">
                    <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1721313822/beautybut-hero_ay1nso.svg" alt="two_women_medium" className=" w-[381px] h-[381px] object-contain" />
                </div>
                <div className=" mt-6">
                    <form action="https://getlaunchlist.com/s/52IebT"
                        method="POST"
                        className='launchlist-form flex flex-col w-full '>
                       
                            <input name="name" type="text" placeholder="Enter your name" required className='h-[50px] placeholder:text-slate-400  text-[14px] font-euclidRegular border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                            <input name="email" type="email" placeholder='Enter your email address' required className='h-[50px] mt-2 font-euclidRegular placeholder:text-slate-400 text-[14px] border border-[#F2F4F7] outline-none focus:ring-0 ring-0 focus:ring-transparent px-2 w-full rounded-[14px]' />
                        

                        <button type="submit" className='mt-4 h-[54px] rounded-[14px] bg-[#8877D8] font-euclidMedium text-[14px] text-white grid place-content-center w-full py-4 border border-[#9F92E0]'>Join Our Waitlist</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Banner
