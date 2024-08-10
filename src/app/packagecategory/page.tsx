'use client';
import React from 'react';
import Image from "next/image";
import PaymentButtons from '@/components/ui/paymentbuttons';

function Page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>
                <div className='w-[90%]'>
                    <div className='flex justify-between mt-8'>
                        <div className='flex gap-4'>
                            <div className="flex justify-center items-center">
                                <div className="text-[#212121] text-[80px] font-[700]">{'<-'}</div>
                            </div>
                            <div>
                                <p className='text-[#212121] text-[80px] font-[700]'>Make Order</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Image width={28} height={28} src="/Images/Notification.svg" alt="img" />
                        </div>
                    </div>

                    
                    <div className='flex gap-4 mt-8 flex-col '>
                        <PaymentButtons/>

                        <div className='mt-5 border-b border-[#FFFFFF]'></div>
                        <span className='text-[#212121] text-[22px] font-[700] mt-8'>Package Category</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/dollar.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='Category' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Weight</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className="flex flex-col items-center justify-center ml-[20px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='0' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Email</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/dollar.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='Email' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Dimension</span>
                        <div className='flex flex-wrap items-center gap-4 h-[6rem]'>
                        <div className="flex  items-center justify-center h-[5rem]">
                            <input className=' bg-white rounded-lg w-[517px] py-5 px-4 outline-none' placeholder='City / Province' />
                            </div> 
                            <div className="flex  items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[517px] py-5 px-4 outline-none' placeholder='City / Province' />
                            </div>
                            <div className="flex  items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[517px] py-5 px-4 outline-none' placeholder='City / Province' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Select Shipping</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/dollar.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='Shipping' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-56 mb-10'>
                    <button className=' w-[1700px] text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>Continue</button>
                    </div>
                   

                  
                </div>
            </div>
        </>
    )
}

export default Page;