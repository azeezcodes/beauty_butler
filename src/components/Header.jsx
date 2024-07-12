"use client"
const Header = () => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (

    <header className="px-2 md:px-6">
      <div className="mt-4 md:mt-10  shadow-md flex justify-between rounded-[24px] px-2.5 py-2 md:px-6 md:py-2 items-center border border-gray-100">
        <div className='flex items-center gap-0.5 md:gap-1 max-h-fit md:h-[50px]'>
          <img src="/logo.png" alt="logo" className="h-[20px] w-[15px] md:h-[40px] md:w-[30px] lg:h-[49px] lg:w-[37px]" />
          <div className="">
            <p className="text-[#8877D8] lg:font-[300] font-extralight md:text-lg text-[10px] leading-none">Beauty</p>
            <p className="text-[#8877D8] lg:font-[300] font-extralight  md:text-lg text-[10px] mt-[-3px] md:mt-[-10px] lg:mt-[-10px]">Butler.</p>
          </div>
        </div>
        <div>
          <button onClick={handleScroll} className='rounded-[8px] md:rounded-[14px]  bg-[#8877D8] font-[300] md:text-xs text-[8px]  text-white grid place-content-center px-4 py-2 md:px-10 md:py-3'>Join Our Waitlist</button>
        </div>
      </div>
    </header>
  )
}

export default Header


//https://www.mybeautybutler.com/