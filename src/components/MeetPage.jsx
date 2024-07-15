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
        <div>
            <div className="hidden md:hidden lg:flex mt-14 bg-[#FFC0FF] h-fit px-12 ">
                <div className="flex-initial">
                    <img src="/fourmobile.png" alt="four" className=''  />
                </div>
                <div className="flex-1 grid place-content-center">
                    <div className="flex flex-col w-[723px] ">
                        <p className='font-apfel text-5xl text-nowrap text-[#1D2939]'>Meet Your New Beauty Bestie!</p>
                        <p className='font-euclidRegular text-[20px] text-[#475467] mt-6  leading-6 '>Beauty Butler is your all-in-one beauty concierge app, connecting you with the best salons, spas, and wellness services in town. From makeup to massages, we've got you covered. Join our waitlist and get first dibs on the app when we launch!.</p>
                        <button onClick={handleScroll} className='rounded-[14px] bg-white text-[#8877D8] font-euclidRegular text-base border border-[#8877D8] grid place-content-center px-10 py-3  text-nowrap w-fit mt-[40px]'>Join Our Waitlist</button>
                    </div>
                </div>
               

            </div>
            <div className="hidden md:flex lg:hidden  mt-14 bg-[#FFC0FF] px-6 py-16">
                <div className="flex flex-col ">
                    <p className='font-apfel text-[40px] text-nowrap text-[#1D2939]'>Meet Your New Beauty Bestie!</p>
                    <p className='font-euclidRegular text-[18px] text-[#475467] mt-6  leading-6 '>Beauty Butler is your all-in-one beauty concierge app, connecting you with the best salons, spas, and wellness services in town. From makeup to massages, we've got you covered. Join our waitlist and get first dibs on the app when we launch!.</p>
                    <button onClick={handleScroll} className='rounded-[14px] bg-white text-[#8877D8] font-euclidRegular text-base border border-[#8877D8] grid place-content-center w-[260px] py-3  text-nowrap mt-[40px] '>Join Our Waitlist</button>
                </div>
            </div>
            <div className="flex md:hidden lg:hidden mt-14 bg-[#FFC0FF] px-4 py-14 w-full">
                <div className="flex flex-col ">
                    <p className='font-apfel text-[36px] text-[#1D2939]'>Meet Your New Beauty Bestie!</p>
                   

                    <p className='font-euclidRegular text-[16px] text-[#475467] mt-4  leading-6 '>Beauty Butler is your all-in-one beauty concierge app, connecting you with the best salons, spas, and wellness services in town. From makeup to massages, we've got you covered. Join our waitlist and get first dibs on the app when we launch!.</p>
                    <button onClick={handleScroll} className='rounded-[14px] bg-white text-[#8877D8] font-euclidRegular text-base border border-[#8877D8] grid place-content-center w-[260px] py-3  text-nowrap mt-[40px]'>Join Our Waitlist</button>
                </div>
            </div>


        </div>
    )
}

export default MeetPage
