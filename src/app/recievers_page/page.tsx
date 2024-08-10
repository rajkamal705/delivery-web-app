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
                    
                    </div>

                    <div className='flex gap-4 mt-8 flex-col '>
                      
                        <PaymentButtons/>

                        <div className='mt-5 border-b border-[#FFFFFF]'></div>
                        <span className='text-[#212121] text-[18px] font-[700] mt-8'>Receiver Name</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/Profile.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='Receiver Name' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Phone Number</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/Mask Group.svg" alt="img" />
                            </div>
                            <div className='flex justify-center items-center ml-1'>
                                <Image width={30} height={30} src="/Images/arrow-down.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[20px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='+1' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Email</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/mail.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='Email' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>City / Province</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/location.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' placeholder='City / Province' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Address Details</span>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                           
                            <div className="flex flex-col items-center justify-center ml-[50px]">
                            <input className=' bg-white rounded-lg w-[1590px] py-5 px-4 outline-none' placeholder='Address Details' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 mb-10'>
                    <button className=' w-[1700px] text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>Continue</button>
                    </div>
                   

                  
                </div>
            </div>
        </>
    )
}

export default Page;