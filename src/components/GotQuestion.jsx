"use client"
import React, { useState } from 'react'

const GotQuestion = () => {
    const content = [
        {
            id: 1,
            title: 'What is Beauty Butler?',
            text: 'Beauty Butler is an on-demand beauty concierge app that connects you with a network of salons, spas and expert beauty specialists with just a few clicks! We’re on a mission to grant you access to a myriad of premium treatments without leaving the comfort of your home.',
        },
        {
            id: 2,
            title: 'How do I join the waitlist?',
            text: 'Please enter your name and email address, and click the Join Our Waitlist button.',
        },
        {
            id: 3,
            title: 'How Does It Work?',
            text: "You'll gain access to the best salons, spas & beauty specialists in town.With the app, you can search, book & pay for your beauty treatments with ease.You'll even be able to track your Butler's progress as they make their way to you!",
        },
        {
            id: 4,
            title: 'When will Beauty Butler launch?',
            text: "We're launching soon! Join our waitlist to get first dibs on the app when we launch.",
        },
        {
            id: 5,
            title: 'Can I list my business on Beauty Butler?',
            text: <span>Yes! Reach out to us on <span className='text-[#8877D8]'>hello@mybeautybutler.com</span>, we're excited for you to join the Beauty Butler community.</span>,
        },
    ];

    const [openItemId, setOpenItemId] = useState(null);

    const toggleShow = (id) => {
        setOpenItemId(prevOpenItemId => prevOpenItemId === id ? null : id);
    };

    return (
        <div className='flex flex-col lg:flex-row pt-[32px] lg:pt-[45px] md:pt-[36px] bg-[#F6F5FD] max-h-fit gap-3 px-[16px] lg:px-[80px] py-[60px] lg:py-[80px]'>
            <div className='flex-1'>
                <p className='font-apfel text-base lg:text-2xl text-[#8877D8]'>Got Questions?</p>
                <p className='font-apfel text-[28px] lg:text-[48px] text-nowrap text-[#101828]'>We’ve Got Answers!</p>
            </div>

            <div className='flex flex-col gap-4 lg:gap-8 flex-1 w-full'>
                {content.map((item) => (
                    <div key={item.id} className='border bg-white rounded-2xl p-4 w-full border-[#8877D8] mb-4'>
                        <div className='flex justify-between items-center'>
                            <p className='font-apfel font-[500] text-[#101828] text-base lg:text-2xl'>{item.title}</p>
                            <div
                                onClick={() => toggleShow(item.id)}
                                className={`cursor-pointer w-[40px] font-euclidRegular h-[40px] shrink-0 grow-0 text-[24px] rounded-full flex items-center justify-center ${openItemId !== item.id ? 'bg-[#8877D8] text-white' : 'bg-[#DFDEF6] text-[#8877D8]'}`}
                            >
                                {openItemId !== item.id ? (<img src='/add.svg' alt='plus' />) : '-'}
                            </div>
                        </div>
                        {openItemId === item.id && (
                            <p className='text-[#667085] font-euclidRegular lg:text-base text-sm mt-2'>
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
