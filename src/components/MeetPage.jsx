"use client"

const MeetPage = () => {
    function handleScroll() {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    };
  return (
      <div className='mt-14 bg-[#FFC0FF] flex h-fit md:py-6 py-12 lg:py-0 '>
          <div className=" hidden md: lg:flex lg:ml-24 ">
              <img src="/fourmobile.png" alt="four" className='max-w-full h-full' />
          </div>
          <div className="flex flex-col justify-center px-4 lg:px-[132px] md:px-auto ">              
              <p className='lg:font-bold font-bold text-2xl lg:text-5xl '>Meet Your New Beauty Bestie!</p>
              <p className='font-medium text-xs lg:text-[20px] text-[#475467] lg:mt-6 mt-2 lg:w-[700px] md:w-[300px] w-fit  lg:leading-6 leading-4'>Beauty Butler is your all-in-one beauty concierge, connecting you with the best salons, spas, and wellness services in town. From haircuts to massages, we've got you covered. We’re your personal beauty assistant at your fingertips.</p>
              <button onClick={handleScroll} className='rounded-[8px] md:rounded-[14px] bg-white text-[#8877D8] font-[400] text-xs md:text-xs lg:text-base border border-[#8877D8] grid place-content-center px-4 py-2 md:px-10 md:py-3 text-nowrap w-fit lg:mt-[40px] mt-5'>Join Our Waitlist</button>
          </div>
      
    </div>
  )
}

export default MeetPage
