import React from 'react'

const content = [
    {
        icon: <div className=''><img src="why1.svg" alt="list" className='' /></div>,
        title: "Effortless Booking",
        text: "Skip the hassle and schedule your beauty sessions with just a few taps – it’s as easy as 1-2-3."
    },
    {
        icon: <div className=''><img src="why2.svg" alt="list" className=' ' /></div>,
        title: "Expert Beauty Pros",
        text: "We’ve partnered with the best salons, spas, and beauty experts to bring you premium services."
    },
    {
        icon: <div className=''><img src="why3.svg" alt="list" className='' /></div>,
        title: "Pamper Yourself Anywhere",
        text: "Experience top-notch treatments from the comfort of your home, office, or anywhere you choose."
    },
    {
        icon: <div className=''><img src="why4.svg" alt="list" className='' /></div>,
        title: <span >Secure Payments</span>,
        text: "Hassle-free and secure payments for a smooth, stress-free experience."
    },
    {
        icon: <div className=''><img src="why5.svg" alt="list" className='' /></div>,
        title: "Exclusive Perks & Deals",
        text: "Enjoy members-only discounts and perks, including access to our loyalty program."
    },
    {
        icon: <div className=''><img src="why6.svg" alt="list" className='' /></div>,
        title: "Safety First",
        text: "We’re committed to your safety and we’ll uphold the strictest health and hygiene standards."
    },
]


const WhyLove = () => {
  return (
    <div className='pt-[72px] pb-[80px] bg-white px-3 '>
          <p className='text-[36px] lg:text-[48px] font-apfel text-center text-[#101828]'>Why You'll Love Beauty Butler</p>       
          <div className='mt-20 lg:mt-12 grid gap-10 place-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 px-3'>
              {content.map((a, index) => (
                  <div key={index} className='flex flex-col items-center w-fit'>
                      <div className=''>{a.icon}</div>
                      <p className='text-center font-apfel text-2xl mt-6 text-[#101828]'>{a.title}</p>
                      <p className='text-center font-euclidRegular text-[16px] text-[#667085]'>{a.text}</p>
                  </div>
              ))}
          </div>     
    </div>
  )
}
export default WhyLove
