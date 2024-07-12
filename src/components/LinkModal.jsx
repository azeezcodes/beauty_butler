'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function LinkModal({open, setOpen }) {

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        
                        <div className=" Modal_content mt-5 sm:mt-6">
                            <img src="/womanwelcome.jpg" alt="womanwelcome" />
                            <p className="text-3xl lg:text-5xl font-bold text-[#8877D8] text-center">You’re on the waitlist!</p>
                            <p className="font-normal text-xs lg:text-base text-[#667085] text-center mt-2 lg:mt-4">Earn an exclusive 10% discount when you refer 3 friends and they each join the waitlist using your unique link</p>
                            <div className="mx-auto mt-4 lg:mt-8 ">
                                <p className="text-black text-left font-medium lg:text-base text-sm">Share your unique referral link</p>
                                <div className="flex justify-between items-center border border-gray-100 rounded-md">
                                    
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}