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

    <header className="">
      <div className="fixed left-0 right-0 mx-4 lg:mx-[80px] md:mx-12 shadow-md flex justify-between rounded-[16px] lg:rounded-[26px] py-2 lg:py-4 px-2.5 md:px-6 items-center border border-gray-100 bg-white/80">
        <img src="/logo.png" alt="logo" className="relative object-contain w-[64px] lg:w-fit h-auto z-10" />
        <div className="relative z-10">
          <button onClick={handleScroll} className='font-euclidRegular rounded-[10px] md:rounded-[14px] bg-[#8877D8] lg:text-sm text-[8px] text-white grid place-content-center px-4 lg:px-8 lg:py-3 py-2 border border-[#9F92E0]'>
            Join Our Waitlist
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header


