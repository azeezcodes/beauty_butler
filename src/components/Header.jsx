"use client"
import Image from 'next/image'

const Header = () => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (

    <header className="px-4 lg:px-[80px] md:px-12">
      <div className="mt-4 md:mt-10 shadow-md flex justify-between rounded-[16px] lg:rounded-[26px] py-2 lg:py-4 px-2.5 md:px-6  items-center border border-gray-100">
      
        <img src="/logo.png" alt="logo" className="object-contain w-[64px] lg:w-fit h-auto "  />
             
        <div>
          <button onClick={handleScroll} className=' rounded-[10px] md:rounded-[14px]  bg-[#8877D8] font-[300] lg:text-sm text-[8px]  text-white grid place-content-center px-4 lg:px-8 lg:py-3 py-2  border border-[#9F92E0] '>Join Our Waitlist</button>
        </div>
      </div>
    </header>
  )
}

export default Header


//https://www.mybeautybutler.com/