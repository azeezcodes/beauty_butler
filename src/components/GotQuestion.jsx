"use client"
import React, { useState } from 'react'

const GotQuestion = () => {
    const content = [
        {   id:1,
            title: 'What is Beauty Butler?',
            text: 'Beauty Butler is your personal beauty concierge, offering tailored recommendations and exclusive deals.',
        },
        {
            id: 2,
            title: 'How do I join the waitlist?',
            text: 'You can book appointments through our app, receive exclusive deals, and get personalized beauty recommendations.',
        },
        {
            id: 3,
            title: 'When will Beauty Butler launch?',
            text: 'We connect you with the best salons, spas, and wellness services, ensuring you get top-notch treatment.',
        },
        {
            id: 4,
            title: 'What is Beauty Butler?',
            text: 'Beauty Butler is your personal beauty concierge, offering tailored recommendations and exclusive deals.',
        },
        {
            id: 5,
            title: 'What is Beauty Butler?',
            text: 'Beauty Butler is your personal beauty concierge, offering tailored recommendations and exclusive deals.',
        },
    ];

    const [show, setShow] = useState({});

    const toggleShow = (id) => {
        setShow((prevShow) => ({
            ...prevShow,
            [id]: !prevShow[id]
        }));
    };

  return (
      <div className=' flex flex-col lg:flex-row mt-[23px] lg:mt-[45px] md:mt-[36px] bg-[#F6F5FD] max-h-fit gap-3   px-[16px] lg:px-[80px] py-[60px] lg:py-[80px]'>
          <div className='flex-1'>
              <p className='font-bold text-base lg:text-2xl text-[#8877D8]'>Got Questions?</p>
              <p className='font-bold text-[28px] lg:text-[48px] text-nowrap'>We’ve Got Answers!</p>
          </div>

          <div className='flex flex-col gap-4 lg:gap-8 flex-1 w-full'>
              {content.map((item) => (
                  <div key={item.id} className='border bg-white rounded-2xl p-4 w-full border-[#8877D8] mb-4'>
                      <div className='flex justify-between items-center'>
                          <p className='font-medium text-base lg:text-2xl'>{item.title}</p>
                          <div
                              onClick={() => toggleShow(item.id)}
                              className={`cursor-pointer w-11 h-11 shrink-0 grow-0 rounded-full grid place-content-center ${!show[item.id] ? 'bg-[#8877D8] text-white' : 'bg-[#DFDEF6] text-[#8877D8]'}`}
                          >
                              {!show[item.id] ? '+' : '-'}
                          </div>
                      </div>
                      {show[item.id] && (
                          <p className='text-[#667085] font-normal lg:text-base text-sm mt-2'>
                              {item.text}
                          </p>
                      )}
                  </div>
              ))}
          </div>
      </div>
  )
}

export default GotQuestion;

// 